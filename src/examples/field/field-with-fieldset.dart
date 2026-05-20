import 'package:flutter/material.dart';

class FieldWithFieldset extends StatelessWidget {
  const FieldWithFieldset({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 288,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            'Account details',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 16,
              fontWeight: FontWeight.w600,
              height: 1,
              color: Color(0xFF2E2B2B), // --foreground
            ),
          ),
          const SizedBox(height: 4),
          const Text(
            'Used to sign in and receive notifications.',
            style: TextStyle(
              fontFamily: 'Lexend',
              fontSize: 12,
              height: 1.625,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
          const SizedBox(height: 16), // --space-200
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              _FieldRow(label: 'Full name', placeholder: 'Jane Doe', keyboardType: TextInputType.name),
              const SizedBox(height: 16),
              _FieldRow(label: 'Email', placeholder: 'jane@example.com', keyboardType: TextInputType.emailAddress),
            ],
          ),
        ],
      ),
    );
  }
}

class _FieldRow extends StatelessWidget {
  final String label;
  final String placeholder;
  final TextInputType keyboardType;

  const _FieldRow({required this.label, required this.placeholder, required this.keyboardType});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          label,
          style: const TextStyle(
            fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500,
            height: 1, color: Color(0xFF2E2B2B), // --foreground
          ),
        ),
        const SizedBox(height: 6),
        TextField(
          keyboardType: keyboardType,
          decoration: InputDecoration(
            hintText: placeholder,
            hintStyle: const TextStyle(color: Color(0xFFC7C6C6)),
            contentPadding: const EdgeInsets.symmetric(horizontal: 16),
            border: const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(8)),
              borderSide: BorderSide(color: Color(0xFFADA5A5)),
            ),
            enabledBorder: const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(8)),
              borderSide: BorderSide(color: Color(0xFFADA5A5)),
            ),
            focusedBorder: const OutlineInputBorder(
              borderRadius: BorderRadius.all(Radius.circular(8)),
              borderSide: BorderSide(color: Color(0xFF8290DD), width: 2),
            ),
            isDense: true, filled: true, fillColor: const Color(0xFFFFFFFF),
          ),
          style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B)),
        ),
      ],
    );
  }
}
