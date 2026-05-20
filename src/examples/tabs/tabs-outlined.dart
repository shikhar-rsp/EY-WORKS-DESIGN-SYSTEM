import 'package:flutter/material.dart';

class TabsOutlined extends StatefulWidget {
  const TabsOutlined({super.key});

  @override
  State<TabsOutlined> createState() => _TabsOutlinedState();
}

class _TabsOutlinedState extends State<TabsOutlined> {
  int _selected = 0;
  final _tabs = const ['All', 'Active', 'Closed'];
  final _content = const [
    'Showing all items.',
    'Showing active items only.',
    'Showing closed items only.',
  ];

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Container(
          padding: const EdgeInsets.all(4),
          decoration: BoxDecoration(
            color: const Color(0xFFFAFAFA), // --muted
            borderRadius: BorderRadius.circular(999),
          ),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: List.generate(_tabs.length, (i) => GestureDetector(
              onTap: () => setState(() => _selected = i),
              child: Container(
                padding: const EdgeInsets.all(12),
                decoration: BoxDecoration(
                  color: _selected == i ? const Color(0xFFFBAE9E) : Colors.transparent, // --primary-subtle-pressed
                  borderRadius: BorderRadius.circular(999),
                ),
                child: Text(
                  _tabs[i],
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: _selected == i ? FontWeight.w600 : FontWeight.w500,
                    color: _selected == i ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272),
                  ),
                ),
              ),
            )),
          ),
        ),
        const SizedBox(height: 16),
        Text(_content[_selected], style: const TextStyle(fontSize: 14, color: Color(0xFF505258))),
      ],
    );
  }
}
