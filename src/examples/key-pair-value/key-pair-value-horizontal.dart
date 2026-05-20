import 'package:flutter/material.dart';

class KeyPairValueHorizontal extends StatelessWidget {
  const KeyPairValueHorizontal({super.key});

  static const _rows = [
    ['Full Name', 'Alice Johnson'],
    ['Email', 'alice@example.com'],
    ['Role', 'Product Designer'],
    ['Department', 'Design'],
    ['Location', 'San Francisco, CA'],
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        children: _rows.asMap().entries.map((e) {
          final isLast = e.key == _rows.length - 1;
          return Column(
            children: [
              _HorizontalRow(label: e.value[0], value: e.value[1]),
              if (!isLast) const Divider(height: 1, color: Color(0xFFEBE9E8)), // --border
            ],
          );
        }).toList(),
      ),
    );
  }
}

class _HorizontalRow extends StatelessWidget {
  final String label;
  final String value;

  const _HorizontalRow({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 100,
            child: Text(
              label,
              style: const TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w400,
                fontSize: 14,
                height: 1.43,
                color: Color(0xFFADA5A5), // --subtlest
              ),
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Text(
              value,
              style: const TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w500,
                fontSize: 14,
                height: 1.43,
                color: Color(0xFF2E2B2B), // --foreground
              ),
            ),
          ),
        ],
      ),
    );
  }
}
