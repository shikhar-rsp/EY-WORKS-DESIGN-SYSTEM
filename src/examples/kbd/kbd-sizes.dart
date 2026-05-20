import 'package:flutter/material.dart';

class KbdSizes extends StatelessWidget {
  const KbdSizes({super.key});

  Widget _buildKbd(String label, double height, double fontSize, EdgeInsets padding, String sizeLabel) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          height: height,
          constraints: BoxConstraints(minWidth: height),
          padding: padding,
          decoration: BoxDecoration(
            color: const Color(0xFFFAFAFA), // --muted
            borderRadius: BorderRadius.circular(4), // --radius-small
            border: Border.all(color: const Color(0xFFEBE9E8)), // --border
          ),
          child: Center(
            child: Text(
              label,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontSize: fontSize,
                fontWeight: FontWeight.w500,
                color: const Color(0xFF7A7272), // --muted-foreground
              ),
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          sizeLabel,
          style: const TextStyle(fontSize: 12, color: Color(0xFF7A7272)),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _buildKbd('Esc', 20, 11, const EdgeInsets.symmetric(horizontal: 6), 'sm'),
        const SizedBox(width: 16),
        _buildKbd('Esc', 24, 12, const EdgeInsets.symmetric(horizontal: 8), 'md'),
      ],
    );
  }
}
