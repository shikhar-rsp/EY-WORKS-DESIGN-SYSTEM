import 'package:flutter/material.dart';

class DividerVertical extends StatelessWidget {
  const DividerVertical({super.key});

  Widget _buildVerticalDivider({
    required String label,
    required double containerWidth,
    required double containerHeight,
    required double barWidth,
    required double barHeight,
  }) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        SizedBox(
          width: containerWidth,
          height: containerHeight,
          child: Center(
            child: Container(
              width: barWidth,
              height: barHeight,
              decoration: BoxDecoration(
                color: const Color(0xFFC2BCBB), // --border-hover
                borderRadius: BorderRadius.circular(99), // --radius-full
              ),
            ),
          ),
        ),
        const SizedBox(height: 12),
        Text(
          label,
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.end,
        children: [
          _buildVerticalDivider(label: 'Large',  containerWidth: 6, containerHeight: 68, barWidth: 4, barHeight: 60),
          const SizedBox(width: 48),
          _buildVerticalDivider(label: 'Medium', containerWidth: 2, containerHeight: 20, barWidth: 2, barHeight: 20),
          const SizedBox(width: 48),
          _buildVerticalDivider(label: 'Small',  containerWidth: 2, containerHeight: 16, barWidth: 2, barHeight: 16),
        ],
      ),
    );
  }
}
