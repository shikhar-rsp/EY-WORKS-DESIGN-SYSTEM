import 'package:flutter/material.dart';

class DividerSpacing extends StatelessWidget {
  const DividerSpacing({super.key});

  Widget _buildRow(String label, double verticalPadding) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          'spacing="$label"',
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
        SizedBox(height: verticalPadding),
        const Divider(height: 1, thickness: 1, color: Color(0xFFEBE9E8)), // --border
        SizedBox(height: verticalPadding),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          _buildRow('default', 0),
          _buildRow('8', 8),
          _buildRow('16', 16),
          _buildRow('20', 20),
          _buildRow('40', 40),
          _buildRow('80', 80),
        ],
      ),
    );
  }
}
