import 'package:flutter/material.dart';

class CheckboxSizes extends StatelessWidget {
  const CheckboxSizes({super.key});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        _SizeColumn(label: 'Small (14px)', scale: 0.875),
        const SizedBox(width: 24),
        _SizeColumn(label: 'Medium (16px)', scale: 1.0),
        const SizedBox(width: 24),
        _SizeColumn(label: 'Large (20px)', scale: 1.25),
      ],
    );
  }
}

class _SizeColumn extends StatelessWidget {
  const _SizeColumn({required this.label, required this.scale});
  final String label;
  final double scale;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Transform.scale(
          scale: scale,
          child: Checkbox(
            value: true,
            onChanged: null,
            activeColor: const Color(0xFFF8785E), // --primary
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(4)),
          ),
        ),
        const SizedBox(height: 4),
        Text(
          label,
          style: const TextStyle(fontFamily: 'Lexend', fontSize: 11, color: Color(0xFF7A7272)),
        ),
      ],
    );
  }
}
