import 'package:flutter/material.dart';

class NativeSelectInvalid extends StatefulWidget {
  const NativeSelectInvalid({super.key});

  @override
  State<NativeSelectInvalid> createState() => _NativeSelectInvalidState();
}

class _NativeSelectInvalidState extends State<NativeSelectInvalid> {
  String? _selected;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 192,
      child: Container(
        height: 36,
        padding: const EdgeInsets.only(left: 16, right: 8),
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          borderRadius: BorderRadius.circular(8), // --radius-medium
          border: Border.all(color: const Color(0xFFCC0000), width: 1), // --destructive
          boxShadow: [
            BoxShadow(
              color: const Color(0xFFCC0000).withOpacity(0.3),
              blurRadius: 0,
              spreadRadius: 2,
            ),
          ],
        ),
        child: DropdownButtonHideUnderline(
          child: DropdownButton<String>(
            value: _selected,
            hint: const Text('Select a role…', style: TextStyle(fontSize: 14, color: Color(0xFFC7C6C6))),
            isExpanded: true,
            icon: const Icon(Icons.keyboard_arrow_down, size: 14, color: Color(0xFF7A7272)),
            style: const TextStyle(fontSize: 14, fontFamily: 'Lexend', color: Color(0xFF2E2B2B)),
            onChanged: (val) => setState(() => _selected = val),
            items: ['Admin', 'Editor', 'Viewer']
                .map((v) => DropdownMenuItem(value: v.toLowerCase(), child: Text(v)))
                .toList(),
          ),
        ),
      ),
    );
  }
}
