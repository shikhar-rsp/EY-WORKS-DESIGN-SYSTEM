import 'package:flutter/material.dart';

class NativeSelectWithOptgroup extends StatefulWidget {
  const NativeSelectWithOptgroup({super.key});

  @override
  State<NativeSelectWithOptgroup> createState() => _NativeSelectWithOptgroupState();
}

class _NativeSelectWithOptgroupState extends State<NativeSelectWithOptgroup> {
  String? _selected;

  final List<({String group, List<String> items})> _groups = [
    (group: 'Citrus', items: ['Orange', 'Lemon', 'Grapefruit']),
    (group: 'Tropical', items: ['Mango', 'Papaya']),
  ];

  List<DropdownMenuItem<String>> _buildItems() {
    final items = <DropdownMenuItem<String>>[];
    for (final g in _groups) {
      items.add(DropdownMenuItem(
        enabled: false,
        value: '__group_${g.group}',
        child: Text(g.group, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w600, color: Color(0xFF7A7272))),
      ));
      for (final item in g.items) {
        items.add(DropdownMenuItem(
          value: item,
          child: Padding(
            padding: const EdgeInsets.only(left: 8),
            child: Text(item, style: const TextStyle(fontSize: 14, color: Color(0xFF2E2B2B))),
          ),
        ));
      }
    }
    return items;
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 224,
      child: Container(
        height: 36,
        padding: const EdgeInsets.only(left: 16, right: 8),
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(8), // --radius-medium
          border: Border.all(color: const Color(0xFFADA5A5)), // --border-input
        ),
        child: DropdownButtonHideUnderline(
          child: DropdownButton<String>(
            value: _selected,
            hint: const Text('Choose a fruit…', style: TextStyle(fontSize: 14, color: Color(0xFFC7C6C6))),
            isExpanded: true,
            icon: const Icon(Icons.keyboard_arrow_down, size: 14, color: Color(0xFF7A7272)),
            onChanged: (val) {
              if (val != null && !val.startsWith('__group_')) {
                setState(() => _selected = val);
              }
            },
            items: _buildItems(),
          ),
        ),
      ),
    );
  }
}
