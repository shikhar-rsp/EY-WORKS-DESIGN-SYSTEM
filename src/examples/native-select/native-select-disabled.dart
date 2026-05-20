import 'package:flutter/material.dart';

class NativeSelectDisabled extends StatelessWidget {
  const NativeSelectDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 192,
      child: Opacity(
        opacity: 0.6,
        child: Container(
          height: 36,
          padding: const EdgeInsets.only(left: 16, right: 8),
          decoration: BoxDecoration(
            color: const Color(0xFFFFFFFF), // --disabled-surface
            borderRadius: BorderRadius.circular(8), // --radius-medium
            border: Border.all(color: const Color(0x24272424)), // --disabled-border
          ),
          child: DropdownButtonHideUnderline(
            child: DropdownButton<String>(
              value: 'react',
              isExpanded: true,
              onChanged: null, // disabled
              icon: const Icon(Icons.keyboard_arrow_down, size: 14, color: Color(0xFF7A7272)),
              style: const TextStyle(fontSize: 14, fontFamily: 'Lexend', color: Color(0xFF2E2B2B)),
              items: const [
                DropdownMenuItem(value: 'react', child: Text('React')),
                DropdownMenuItem(value: 'vue', child: Text('Vue')),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
