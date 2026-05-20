import 'package:flutter/material.dart';

class LozengeSolid extends StatelessWidget {
  const LozengeSolid({super.key});

  Widget _buildLozenge(String label, Color bg, Color textColor) {
    return Container(
      height: 16,
      padding: const EdgeInsets.symmetric(horizontal: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(4), // --radius-small
      ),
      child: Text(
        label,
        style: TextStyle(
          fontFamily: 'Lexend',
          fontSize: 12,
          fontWeight: FontWeight.w400,
          color: textColor,
          height: 1.0,
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Wrap(
        spacing: 12,
        runSpacing: 8,
        crossAxisAlignment: WrapCrossAlignment.center,
        children: [
          _buildLozenge('Default', const Color(0xFF2E2B2B), Colors.white), // --foreground
          _buildLozenge('Red', const Color(0xFFFF3333), Colors.white), // --accent-red-bold
          _buildLozenge('Blue', const Color(0xFF60A2FF), Colors.white), // --accent-blue-bold
          _buildLozenge('Yellow', const Color(0xFFFCD34D), const Color(0xFF2E2B2B)), // --accent-yellow-bold / --foreground
          _buildLozenge('Lime', const Color(0xFFA3E635), const Color(0xFF2E2B2B)), // --accent-lime-bold / --foreground
          _buildLozenge('Brand', const Color(0xFFF8785E), Colors.white), // --primary
          _buildLozenge('Teal', const Color(0xFF358EAC), Colors.white), // --accent-teal-bold
          _buildLozenge('Magenta', const Color(0xFFB24F8C), Colors.white), // --accent-magenta-bold
          _buildLozenge('Green', const Color(0xFF229666), Colors.white), // --accent-green-bold
          _buildLozenge('Grey', const Color(0xFFF4F4F4), const Color(0xFF505258)), // --secondary / --secondary-foreground
        ],
      ),
    );
  }
}
