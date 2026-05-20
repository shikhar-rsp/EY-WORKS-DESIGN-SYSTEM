import 'package:flutter/material.dart';

class KeyPairValueReverse extends StatelessWidget {
  const KeyPairValueReverse({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Normal section
          const Text(
            'Normal — label subtle, value bold',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272)), // --muted-foreground
          ),
          const SizedBox(height: 12),
          const _KPVRow(label: 'Status', value: 'Active', reverse: false),
          const Divider(height: 1, color: Color(0xFFEBE9E8)), // --border
          const _KPVRow(label: 'Plan', value: 'Enterprise', reverse: false),
          const SizedBox(height: 24),

          // Reverse section
          const Text(
            'Reverse — label bold, value subtle',
            style: TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272)),
          ),
          const SizedBox(height: 12),
          const _KPVRow(label: 'Status', value: 'Active', reverse: true),
          const Divider(height: 1, color: Color(0xFFEBE9E8)),
          const _KPVRow(label: 'Plan', value: 'Enterprise', reverse: true),
        ],
      ),
    );
  }
}

class _KPVRow extends StatelessWidget {
  final String label;
  final String value;
  final bool reverse;

  const _KPVRow({required this.label, required this.value, required this.reverse});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 80,
            child: Text(
              label,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: reverse ? FontWeight.w500 : FontWeight.w400,
                fontSize: 14,
                height: 1.43,
                color: reverse ? const Color(0xFF2E2B2B) : const Color(0xFFADA5A5), // --foreground / --subtlest
              ),
            ),
          ),
          const SizedBox(width: 16),
          Expanded(
            child: Text(
              value,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: reverse ? FontWeight.w400 : FontWeight.w500,
                fontSize: 14,
                height: 1.43,
                color: reverse ? const Color(0xFFADA5A5) : const Color(0xFF2E2B2B), // --subtlest / --foreground
              ),
            ),
          ),
        ],
      ),
    );
  }
}
