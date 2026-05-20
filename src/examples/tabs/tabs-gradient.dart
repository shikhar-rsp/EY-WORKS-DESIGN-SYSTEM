import 'package:flutter/material.dart';

class TabsGradient extends StatefulWidget {
  const TabsGradient({super.key});

  @override
  State<TabsGradient> createState() => _TabsGradientState();
}

class _TabsGradientState extends State<TabsGradient> with SingleTickerProviderStateMixin {
  late TabController _controller;
  final _tabs = const ['Overview', 'Analytics', 'Reports'];
  final _content = const [
    'Overview content goes here.',
    'Analytics data goes here.',
    'Reports content goes here.',
  ];

  @override
  void initState() {
    super.initState();
    _controller = TabController(length: _tabs.length, vsync: this);
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          color: const Color(0xFFFAFAFA), // --muted
          child: TabBar(
            controller: _controller,
            labelColor: const Color(0xFF2E2B2B), // --foreground
            unselectedLabelColor: const Color(0xFF7A7272), // --muted-foreground
            indicatorColor: const Color(0xFFF8785E), // --primary
            indicatorWeight: 2,
            tabs: _tabs.map((t) => Tab(text: t)).toList(),
          ),
        ),
        const SizedBox(height: 16),
        SizedBox(
          height: 40,
          child: TabBarView(
            controller: _controller,
            children: _content.map((c) => Text(c, style: const TextStyle(fontSize: 14, color: Color(0xFF505258)))).toList(),
          ),
        ),
      ],
    );
  }
}
