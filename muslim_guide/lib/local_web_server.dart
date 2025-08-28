import 'dart:io';
import 'package:flutter/services.dart';
import 'package:path_provider/path_provider.dart';
import 'package:shelf/shelf_io.dart' as shelf_io;
import 'package:shelf_static/shelf_static.dart';
import 'dart:convert';
import 'package:shelf/shelf.dart';

class LocalWebServer {
  static HttpServer? _server;
  static String? _siteDirPath;
  static int? _port;

  static Future<String> start() async {
    if (_server != null) return 'http://localhost:$_port/index.html';

    //cCopy assets/offline_site to documents directory if not already present
    final docsDir = await getApplicationDocumentsDirectory();
    final siteDir = Directory('${docsDir.path}/offline_site');
    if (!await siteDir.exists()) {
      await _copyAssets('assets/offline_site', siteDir.path);
      print('Copied assets to: ${siteDir.path}');
    }
    _siteDirPath = siteDir.path;

    //start shelf static server
    final staticHandler = createStaticHandler(
      _siteDirPath!,
      defaultDocument: 'index.html',
      serveFilesOutsidePath: true,
      useHeaderBytesForContentType: true,
    );

    final handler = (Request request) async {
      final response = await staticHandler(request);
      final path = request.url.path;
      if (path.endsWith('.css')) {
        return response
            .change(headers: {'content-type': 'text/css; charset=utf-8'});
      }
      if (path.endsWith('.js')) {
        return response.change(
            headers: {'content-type': 'application/javascript; charset=utf-8'});
      }
      return response;
    };
    _server = await shelf_io.serve(handler, 'localhost', 0); // 0 = random port
    _port = _server!.port;
    return 'http://127.0.0.1:$_port/index.html';
  }

  static Future<void> stop() async {
    await _server?.close(force: true);
    _server = null;
  }

  /// Recursively copy assets from bundle to target directory
  static Future<void> _copyAssets(String assetPath, String targetPath) async {
    final manifestContent = await rootBundle.loadString('AssetManifest.json');
    final Map<String, dynamic> manifestMap = jsonDecode(manifestContent);
    final files = manifestMap.keys
        .where((String key) => key.startsWith(assetPath))
        .toList();

    for (final asset in files) {
      final relative = asset.substring(assetPath.length);
      final file = File('$targetPath$relative');
      await file.parent.create(recursive: true);
      final data = await rootBundle.load(asset);
      await file.writeAsBytes(data.buffer.asUint8List());
    }
  }
}
