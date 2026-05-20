import 'package:flutter/material.dart';

class SelectDisabled extends StatelessWidget {
  const SelectDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 224,
      child: DropdownButtonFormField<String>(
        value: null,
        hint: const Text(
          'Select an option',
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
            borderSide: const BorderSide(color: Color(0x24272424)), // --disabled-border
          ),
          disabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(8),
            borderSide: const BorderSide(color: Color(0x24272424)), // --disabled-border
          ),
          filled: true,
          fillColor: const Color(0xFFFFFFFF), // --disabled-surface
        ),
        style: const TextStyle(
          fontSize: 14,
          color: Color(0x4F272424), // --disabled
          fontFamily: 'Lexend',
        ),
        items: const [],
        onChanged: null, // null = disabled
      ),
    );
  }
}
