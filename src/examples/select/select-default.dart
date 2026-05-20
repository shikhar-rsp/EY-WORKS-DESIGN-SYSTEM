import 'package:flutter/material.dart';

class SelectDefault extends StatefulWidget {
  const SelectDefault({super.key});

  @override
  State<SelectDefault> createState() => _SelectDefaultState();
}

class _SelectDefaultState extends State<SelectDefault> {
  String? _value;

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 224,
      child: DropdownButtonFormField<String>(
        value: _value,
        hint: const Text(
          'Select a fruit',
          style: TextStyle(
            fontSize: 14,
            color: Color(0xFFC7C6C6), // --placeholder
            fontFamily: 'Lexend',
          ),
        ),
        decoration: InputDecoration(
          contentPadding: const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8), // --radius-medium
            borderSide: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
          ),
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
          ),
          filled: true,
          fillColor: const Color(0xFFFFFFFF), // --background
        ),
        style: const TextStyle(
          fontSize: 14,
          color: Color(0xFF2E2B2B), // --foreground
          fontFamily: 'Lexend',
        ),
        items: [
          const DropdownMenuItem(enabled: false, value: null, child: Text('Fruits', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272), fontWeight: FontWeight.w500))),
          ...['Apple', 'Banana', 'Blueberry', 'Grapes'].map((f) => DropdownMenuItem(value: f.toLowerCase(), child: Text(f))),
          const DropdownMenuItem(enabled: false, value: null, child: Divider()),
          const DropdownMenuItem(enabled: false, value: null, child: Text('Vegetables', style: TextStyle(fontSize: 12, color: Color(0xFF7A7272), fontWeight: FontWeight.w500))),
          ...['Carrot', 'Potato'].map((v) => DropdownMenuItem(value: v.toLowerCase(), child: Text(v))),
        ],
        onChanged: (val) => setState(() => _value = val),
      ),
    );
  }
}
