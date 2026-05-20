import 'package:flutter/material.dart';

class NativeSelectDefault extends StatefulWidget {
  const NativeSelectDefault({super.key});

  @override
  State<NativeSelectDefault> createState() => _NativeSelectDefaultState();
}

class _NativeSelectDefaultState extends State<NativeSelectDefault> {
  String? _selected;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 192,
      child: Container(
        height: 36,
        padding: const EdgeInsets.only(left: 16, right: 8), // --space-200
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(8), // --radius-medium
          border: Border.all(color: const Color(0xFFADA5A5)), // --border-input
        ),
        child: DropdownButtonHideUnderline(
          child: DropdownButton<String>(
            value: _selected,
            hint: const Text('Pick one…', style: TextStyle(fontSize: 14, color: Color(0xFFC7C6C6))),
            isExpanded: true,
            icon: const Icon(Icons.keyboard_arrow_down, size: 14, color: Color(0xFF7A7272)),
            style: const TextStyle(fontSize: 14, fontFamily: 'Lexend', color: Color(0xFF2E2B2B)),
            onChanged: (val) => setState(() => _selected = val),
            items: ['React', 'Vue', 'Svelte', 'Angular']
                .map((v) => DropdownMenuItem(value: v, child: Text(v)))
                .toList(),
          ),
        ),
      ),
    );
  }
}
