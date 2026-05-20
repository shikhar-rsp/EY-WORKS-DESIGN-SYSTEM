import 'package:flutter/material.dart';

class TypographyDecoratorsExample extends StatelessWidget {
  const TypographyDecoratorsExample({super.key});

  static const _base = TextStyle(
    fontFamily: 'Lexend',
    fontSize: 14,
    height: 1.5,
    color: Color(0xFF2E2B2B),
  );

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'Strong — bold weight for emphasis.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF2E2B2B),
              fontWeight: FontWeight.w600,
            ),
          ),
          const SizedBox(height: 12),
          const Text(
            'Italic — slanted text for stylistic emphasis.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF2E2B2B),
              fontStyle: FontStyle.italic,
            ),
          ),
          const SizedBox(height: 12),
          const Text(
            'Underline — draws attention with an underline.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF2E2B2B),
              decoration: TextDecoration.underline,
            ),
          ),
          const SizedBox(height: 12),
          const Text(
            'Delete — strikethrough for removed content.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF2E2B2B),
              decoration: TextDecoration.lineThrough,
            ),
          ),
          const SizedBox(height: 12),
          // Mark — highlight simulation with a Container
          Container(
            color: Color(0x4DD97706), // warning/30
            padding: const EdgeInsets.symmetric(horizontal: 2),
            child: const Text(
              'Mark — highlighted text like a marker.',
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                height: 1.5,
                color: Color(0xFF2E2B2B),
              ),
            ),
          ),
          const SizedBox(height: 12),
          // Code — monospace style
          Container(
            decoration: BoxDecoration(
              color: Color(0xFFFAFAFA),
              borderRadius: BorderRadius.circular(4),
            ),
            padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 1),
            child: const Text(
              'code_snippet()',
              style: TextStyle(
                fontFamily: 'monospace',
                fontSize: 12,
                height: 1.5,
                color: Color(0xFF2E2B2B),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
