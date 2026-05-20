import 'package:flutter/material.dart';

class LozengeLight extends StatelessWidget {
  const LozengeLight({super.key});

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
          _buildLozenge('Default', const Color(0xFFFAFAFA), const Color(0xFF2E2B2B)), // --muted / --foreground
          _buildLozenge('Red', const Color(0xFFFFCCCC), const Color(0xFFCC0000)), // --destructive-hover / --destructive
          _buildLozenge('Blue', const Color(0xFFD7E8FF), const Color(0xFF2D70CF)), // --accent-blue / --info
          _buildLozenge('Yellow', const Color(0xFFFEF3C7), const Color(0xFFD97706)), // --accent-yellow / --warning
          _buildLozenge('Lime', const Color(0xFFECFCCB), const Color(0xFF65A30D)), // --accent-lime / --success
          _buildLozenge('Brand', const Color(0xFFFEE4DF), const Color(0xFFF8785E)), // --primary-subtle / --primary
          _buildLozenge('Teal', const Color(0xFFD9F0F7), const Color(0xFF358EAC)), // --accent-teal / --accent-teal-bold
          _buildLozenge('Magenta', const Color(0xFFF8E0EE), const Color(0xFFB24F8C)), // --accent-magenta / --accent-magenta-bold
          _buildLozenge('Green', const Color(0xFFD1FAE5), const Color(0xFF229666)), // --accent-green / --accent-green-bold
          _buildLozenge('Grey', const Color(0xFFF4F4F4), const Color(0xFF505258)), // --secondary / --secondary-foreground
        ],
      ),
    );
  }
}
