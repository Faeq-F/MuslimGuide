import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'local_web_server.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  final url = await LocalWebServer.start();
  runApp(App(url: url));
}

class App extends StatelessWidget {
  final String url;
  const App({super.key, required this.url});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: WebViewPage(url: url),
    );
  }
}

class WebViewPage extends StatefulWidget {
  final String url;
  const WebViewPage({super.key, required this.url});

  @override
  State<WebViewPage> createState() => _WebViewPageState();
}

class _WebViewPageState extends State<WebViewPage> {
  late final WebViewController _controller;

  @override
  void initState() {
    super.initState();
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..loadRequest(Uri.parse(widget.url));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
      child: WebViewWidget(controller: _controller),
    ));
  }
}
