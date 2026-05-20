import 'package:flutter/material.dart';

class TypographyTitleExample extends StatelessWidget {
  const TypographyTitleExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: const [
          Text(
            'Heading Level 1',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 36,
              fontWeight: FontWeight.w600,
              letterSpacing: -0.3,
              height: 1.25,
              color: Color(0xFF2E2B2B),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Heading Level 2',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 30,
              fontWeight: FontWeight.w600,
              letterSpacing: -0.3,
              height: 1.25,
              color: Color(0xFF2E2B2B),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Heading Level 3',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 24,
              fontWeight: FontWeight.w600,
              letterSpacing: -0.3,
              height: 1.25,
              color: Color(0xFF2E2B2B),
            ),
          ),
          SizedBox(height: 12),
          Text(
            'Heading Level 4',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 20,
              fontWeight: FontWeight.w600,
              letterSpacing: -0.3,
              height: 1.25,
              color: Color(0xFF2E2B2B),
            ),
          ),
        ],
      ),
    );
  }
}
