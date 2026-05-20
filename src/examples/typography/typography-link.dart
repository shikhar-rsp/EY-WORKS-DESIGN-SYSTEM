import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';

class TypographyLinkExample extends StatelessWidget {
  const TypographyLinkExample({super.key});

  Widget _buildLink(String label, {bool isExternal = false}) {
    return RichText(
      text: TextSpan(
        text: label,
        style: const TextStyle(
          fontFamily: 'Lexend',
          fontSize: 14,
          height: 1.5,
          color: Color(0xFFF8785E),
          decoration: TextDecoration.underline,
          decorationColor: Color(0xFFF8785E),
        ),
        recognizer: TapGestureRecognizer()
          ..onTap = () {
            // Handle navigation
          },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildLink('Visit the documentation \u2192'),
          const SizedBox(height: 12),
          _buildLink('Learn more about design tokens'),
          const SizedBox(height: 12),
          _buildLink('Opens in a new tab \u2197', isExternal: true),
        ],
      ),
    );
  }
}
