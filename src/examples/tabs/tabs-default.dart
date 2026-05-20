import 'package:flutter/material.dart';

class TabsDefault extends StatefulWidget {
  const TabsDefault({super.key});

  @override
  State<TabsDefault> createState() => _TabsDefaultState();
}

class _TabsDefaultState extends State<TabsDefault> with SingleTickerProviderStateMixin {
  late TabController _controller;
  final _tabs = const ['Account', 'Password', 'Settings'];
  final _content = const [
    'Manage your account details and preferences.',
    'Change your password and security settings.',
    'Configure application settings.',
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
        TabBar(
          controller: _controller,
          labelColor: const Color(0xFF2E2B2B), // --foreground
          unselectedLabelColor: const Color(0xFF7A7272), // --muted-foreground
          indicatorColor: const Color(0xFFA64C39), // --primary-active
          indicatorWeight: 3,
          tabs: _tabs.map((t) => Tab(text: t)).toList(),
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
