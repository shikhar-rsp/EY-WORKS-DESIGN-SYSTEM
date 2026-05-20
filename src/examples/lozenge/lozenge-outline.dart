import 'package:flutter/material.dart';

class LozengeOutline extends StatelessWidget {
  const LozengeOutline({super.key});

  Widget _buildLozenge(String label, Color borderColor, Color textColor) {
    return Container(
      height: 16,
      padding: const EdgeInsets.symmetric(horizontal: 4),
      decoration: BoxDecoration(
        color: Colors.transparent,
        borderRadius: BorderRadius.circular(4), // --radius-small
        border: Border.all(color: borderColor, width: 1),
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
          _buildLozenge('Default', const Color(0xFFC2BCBB), const Color(0xFF2E2B2B)), // --border-hover / --foreground
          _buildLozenge('Red', const Color(0xFFCC0000), const Color(0xFFCC0000)), // --destructive
          _buildLozenge('Blue', const Color(0xFF2D70CF), const Color(0xFF2D70CF)), // --info
          _buildLozenge('Yellow', const Color(0xFFD97706), const Color(0xFFD97706)), // --warning
          _buildLozenge('Lime', const Color(0xFF65A30D), const Color(0xFF65A30D)), // --success
          _buildLozenge('Brand', const Color(0xFFF8785E), const Color(0xFFF8785E)), // --primary
          _buildLozenge('Teal', const Color(0xFF358EAC), const Color(0xFF358EAC)), // --accent-teal-bold
          _buildLozenge('Magenta', const Color(0xFFB24F8C), const Color(0xFFB24F8C)), // --accent-magenta-bold
          _buildLozenge('Green', const Color(0xFF229666), const Color(0xFF229666)), // --accent-green-bold
          _buildLozenge('Grey', const Color(0xFFC2BCBB), const Color(0xFF505258)), // --border-hover / --secondary-foreground
        ],
      ),
    );
  }
}
