import 'package:flutter/material.dart';

class TypographyTextExample extends StatelessWidget {
  const TypographyTextExample({super.key});

  static const _style = TextStyle(
    fontFamily: 'Lexend',
    fontSize: 14,
    height: 1.5,
  );

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text(
            'Default — primary text for body content.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF2E2B2B),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Secondary — supporting or metadata text.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF7A7272),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Success — confirmation or positive feedback.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFF65A30D),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Warning — caution or alert message.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFFD97706),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Danger — error or destructive action notice.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 14,
              height: 1.5,
              color: Color(0xFFCC0000),
            ),
          ),
        ],
      ),
    );
  }
}
