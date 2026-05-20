import 'package:flutter/material.dart';

class LozengeWithIcon extends StatelessWidget {
  const LozengeWithIcon({super.key});

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
          Icon(Icons.chevron_left, size: 14, color: textColor),
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
          _buildLozenge(label: 'In Progress', bg: const Color(0xFFF8785E), textColor: Colors.white), // --primary
          _buildLozenge(label: 'Review', bg: Colors.transparent, textColor: const Color(0xFF2D70CF), borderColor: const Color(0xFF2D70CF)), // --info
          _buildLozenge(label: 'Approved', bg: const Color(0xFFD1FAE5), textColor: const Color(0xFF229666)), // --accent-green / --accent-green-bold
          _buildLozenge(label: 'Blocked', bg: const Color(0xFFFFFFFF), textColor: const Color(0xFFCC0000), borderColor: const Color(0xFFCC0000)), // --background / --destructive
        ],
      ),
    );
  }
}
