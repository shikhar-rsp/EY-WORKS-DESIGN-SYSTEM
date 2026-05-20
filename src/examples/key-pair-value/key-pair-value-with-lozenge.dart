import 'package:flutter/material.dart';

class KeyPairValueWithLozenge extends StatelessWidget {
  const KeyPairValueWithLozenge({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        children: [
          _KPVLozengeRow(
            label: 'Payment Status',
            lozengeText: 'Paid',
            bgColor: const Color(0xFFECFCCB), // --accent-lime
            textColor: const Color(0xFF65A30D), // --success
            isLast: false,
          ),
          const Divider(height: 1, color: Color(0xFFEBE9E8)), // --border
          _KPVLozengeRow(
            label: 'Review Status',
            lozengeText: 'Pending',
            bgColor: const Color(0xFFFEF3C7), // --accent-yellow
            textColor: const Color(0xFFD97706), // --warning
            isLast: false,
          ),
          const Divider(height: 1, color: Color(0xFFEBE9E8)),
          _KPVLozengeRow(
            label: 'Account Status',
            lozengeText: 'Active',
            bgColor: const Color(0xFFD7E8FF), // --accent-blue
            textColor: const Color(0xFF2D70CF), // --info
            isLast: false,
          ),
          const Divider(height: 1, color: Color(0xFFEBE9E8)),
          _KPVLozengeRow(
            label: 'Access Level',
            lozengeText: 'Admin',
            bgColor: Colors.transparent,
            textColor: const Color(0xFF505EAC), // --discovery
            borderColor: const Color(0xFF505EAC), // --discovery
            isLast: true,
          ),
        ],
      ),
    );
  }
}

class _KPVLozengeRow extends StatelessWidget {
  final String label;
  final String lozengeText;
  final Color bgColor;
  final Color textColor;
  final Color? borderColor;
  final bool isLast;

  const _KPVLozengeRow({
    required this.label,
    required this.lozengeText,
    required this.bgColor,
    required this.textColor,
    this.borderColor,
    required this.isLast,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            width: 120,
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
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
            decoration: BoxDecoration(
              color: bgColor,
              borderRadius: BorderRadius.circular(4), // --radius-small
              border: borderColor != null ? Border.all(color: borderColor!, width: 1) : null,
            ),
            child: Text(
              lozengeText,
              style: TextStyle(
                fontFamily: 'Lexend',
                fontWeight: FontWeight.w500,
                fontSize: 12,
                color: textColor,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
