import 'package:flutter/material.dart';

class KeyPairValueHeader extends StatelessWidget {
  const KeyPairValueHeader({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Header as section label
          _SectionCaption(text: 'Header as section label'),
          const SizedBox(height: 8),
          const _KPVHeader(label: 'Personal Information'),
          const SizedBox(height: 8),
          const _KPVRow(label: 'Full Name', value: 'Alice Johnson'),
          const Divider(height: 1, color: Color(0xFFEBE9E8)), // --border
          const _KPVRow(label: 'Email', value: 'alice@example.com'),
          const SizedBox(height: 24),

          // Header with icon
          _SectionCaption(text: 'Header with icon'),
          const SizedBox(height: 8),
          const _KPVHeader(label: 'Synced Data', showIcon: true),
          const SizedBox(height: 8),
          const _KPVRow(label: 'Last Sync', value: '2 minutes ago'),
          const Divider(height: 1, color: Color(0xFFEBE9E8)),
          const _KPVRow(label: 'Records', value: '1,284'),
        ],
      ),
    );
  }
}

class _SectionCaption extends StatelessWidget {
  final String text;
  const _SectionCaption({required this.text});

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      style: const TextStyle(
        fontFamily: 'Lexend',
        fontSize: 12,
        color: Color(0xFF7A7272), // --muted-foreground
      ),
    );
  }
}

class _KPVHeader extends StatelessWidget {
  final String label;
  final bool showIcon;

  const _KPVHeader({required this.label, this.showIcon = false});

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: [
        if (showIcon) ...[
          const Icon(Icons.sync_rounded, size: 16, color: Color(0xFFADA5A5)), // --subtlest
          const SizedBox(width: 4),
        ],
        Text(
          label.toUpperCase(),
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontWeight: FontWeight.w400,
            fontSize: 14,
            letterSpacing: 0.7,
            color: Color(0xFFADA5A5), // --subtlest
          ),
        ),
      ],
    );
  }
}

class _KPVRow extends StatelessWidget {
  final String label;
  final String value;

  const _KPVRow({required this.label, required this.value});

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
