import 'package:flutter/material.dart';

class LabelDisabled extends StatelessWidget {
  const LabelDisabled({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Opacity(
          opacity: 0.7,
          child: const Text(
            'Disabled field',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              fontWeight: FontWeight.w500,
              color: Color(0xFF2E2B2B), // --foreground
              height: 1,
            ),
          ),
        ),
        const SizedBox(height: 8),
        Opacity(
          opacity: 0.5,
          child: Container(
            height: 36,
            decoration: BoxDecoration(
              color: const Color(0xFFFFFFFF), // --background
              borderRadius: BorderRadius.circular(8), // --radius-medium
              border: Border.all(color: const Color(0xFFADA5A5)), // --border-input
            ),
            child: const TextField(
              enabled: false,
              decoration: InputDecoration(
                hintText: 'Not available',
                hintStyle: TextStyle(color: Color(0xFFC7C6C6)), // --placeholder
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(horizontal: 16),
              ),
              style: TextStyle(fontSize: 14, color: Color(0xFF2E2B2B)),
            ),
          ),
        ),
      ],
    );
  }
}
