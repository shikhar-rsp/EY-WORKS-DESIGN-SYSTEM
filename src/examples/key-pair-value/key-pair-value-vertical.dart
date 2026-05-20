import 'package:flutter/material.dart';

class KeyPairValueVertical extends StatelessWidget {
  const KeyPairValueVertical({super.key});

  static const _items = [
    ['Full Name', 'Alice Johnson'],
    ['Email', 'alice@example.com'],
    ['Role', 'Product Designer'],
    ['Department', 'Design'],
    ['Location', 'San Francisco, CA'],
    ['Joined', 'Jan 2024'],
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Wrap(
        spacing: 32,
        runSpacing: 0,
        children: _items.map((item) => SizedBox(
          width: 150,
          child: _VerticalItem(label: item[0], value: item[1]),
        )).toList(),
      ),
    );
  }
}

class _VerticalItem extends StatelessWidget {
  final String label;
  final String value;

  const _VerticalItem({required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontWeight: FontWeight.w400,
              fontSize: 14,
              height: 1.43,
              color: Color(0xFFADA5A5), // --subtlest
            ),
          ),
          const SizedBox(height: 4),
          Text(
            value,
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontWeight: FontWeight.w500,
              fontSize: 14,
              height: 1.43,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
        ],
      ),
    );
  }
}
