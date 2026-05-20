import 'package:flutter/material.dart';

class TextareaDisabled extends StatelessWidget {
  const TextareaDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return TextField(
      enabled: false,
      maxLines: 4,
      decoration: InputDecoration(
        hintText: 'This field is disabled',
        hintStyle: const TextStyle(
          color: Color(0x4F272424), // --disabled
          fontFamily: 'Lexend',
          fontSize: 14,
        ),
        filled: true,
        fillColor: const Color(0xFFFFFFFF), // --disabled-surface
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 16, // --space-200
          vertical: 12,   // --space-150
        ),
        disabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(8), // --radius-medium
          borderSide: const BorderSide(color: Color(0xFFE0DADA)), // --disabled-border
        ),
      ),
      style: const TextStyle(
        fontFamily: 'Lexend',
        fontSize: 14,
        color: Color(0x4F272424), // --disabled
      ),
    );
  }
}
