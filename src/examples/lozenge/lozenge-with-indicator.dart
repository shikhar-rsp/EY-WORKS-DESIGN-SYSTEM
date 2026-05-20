import 'package:flutter/material.dart';

class LozengeWithIndicator extends StatelessWidget {
  const LozengeWithIndicator({super.key});

  Widget _buildLozenge({
    required String label,
    required Color bg,
    required Color textColor,
    Color? borderColor,
  }) {
    return Container(
      height: 16,
      padding: const EdgeInsets.symmetric(horizontal: 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(4), // --radius-small
        border: borderColor != null ? Border.all(color: borderColor, width: 1) : null,
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Indicator dot
          Container(
            width: 8,
            height: 8,
            decoration: BoxDecoration(
              color: textColor.withOpacity(0.7),
              shape: BoxShape.circle,
            ),
          ),
          const SizedBox(width: 4),
          Text(
            label,
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 12,
              fontWeight: FontWeight.w400,
              color: textColor,
              height: 1.0,
            ),
          ),
        ],
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
          _buildLozenge(label: 'Active', bg: const Color(0xFFF8785E), textColor: Colors.white), // --primary
          _buildLozenge(label: 'Error', bg: const Color(0xFFFF3333), textColor: Colors.white), // --accent-red-bold
          _buildLozenge(label: 'Success', bg: const Color(0xFF229666), textColor: Colors.white), // --accent-green-bold
          _buildLozenge(label: 'Warning', bg: const Color(0xFFFEF3C7), textColor: const Color(0xFFD97706)), // --accent-yellow / --warning
          _buildLozenge(label: 'Info', bg: Colors.transparent, textColor: const Color(0xFF2D70CF), borderColor: const Color(0xFF2D70CF)), // --info
        ],
      ),
    );
  }
}
