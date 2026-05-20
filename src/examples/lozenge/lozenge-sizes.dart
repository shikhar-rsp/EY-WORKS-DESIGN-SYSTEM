import 'package:flutter/material.dart';

class LozengeSizes extends StatelessWidget {
  const LozengeSizes({super.key});

  Widget _buildLozenge(String label, double height, double fontSize, EdgeInsets padding) {
    return Column(
      children: [
        Container(
          height: height,
          padding: padding,
          decoration: BoxDecoration(
            color: const Color(0xFFF8785E), // --primary
            borderRadius: BorderRadius.circular(4), // --radius-small
          ),
          child: Text(
            label,
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: fontSize,
              fontWeight: FontWeight.w400,
              color: Colors.white,
              height: 1.0,
            ),
          ),
        ),
        const SizedBox(height: 8),
        Text(
          '${height.toInt()}px',
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 10,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Wrap(
        spacing: 16,
        runSpacing: 8,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          _buildLozenge('Small', 16, 12, const EdgeInsets.symmetric(horizontal: 4)), // sm
          _buildLozenge('Medium', 20, 14, const EdgeInsets.symmetric(horizontal: 4)), // md
          _buildLozenge('Large', 24, 14, const EdgeInsets.symmetric(horizontal: 6, vertical: 2)), // lg
        ],
      ),
    );
  }
}
