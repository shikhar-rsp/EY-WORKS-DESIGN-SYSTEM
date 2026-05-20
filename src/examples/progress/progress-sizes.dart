import 'package:flutter/material.dart';

class ProgressSizes extends StatelessWidget {
  const ProgressSizes({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 256,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          _SizeRow(label: 'sm', value: 0.40, height: 4),
          const SizedBox(height: 24), // --space-300
          _SizeRow(label: 'md', value: 0.60, height: 8),
          const SizedBox(height: 24),
          _SizeRow(label: 'lg', value: 0.80, height: 12),
        ],
      ),
    );
  }
}

class _SizeRow extends StatelessWidget {
  final String label;
  final double value;
  final double height;

  const _SizeRow({required this.label, required this.value, required this.height});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
        ),
        const SizedBox(height: 8), // --space-100
        LinearProgressIndicator(
          value: value,
          backgroundColor: const Color(0xFFF4F3F2), // --muted
          valueColor: const AlwaysStoppedAnimation<Color>(
            Color(0xFFF8785E), // --primary
          ),
          borderRadius: BorderRadius.circular(99), // --radius-full
          minHeight: height,
        ),
      ],
    );
  }
}
