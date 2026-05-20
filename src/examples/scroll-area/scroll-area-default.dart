import 'package:flutter/material.dart';

class ScrollAreaDefault extends StatelessWidget {
  const ScrollAreaDefault({super.key});

  static const _tags = [
    'v1.0.0', 'v1.1.0', 'v1.2.0', 'v1.3.0', 'v2.0.0',
    'v2.1.0', 'v2.2.0', 'v3.0.0', 'v3.1.0', 'v3.2.0',
    'v4.0.0', 'v4.1.0', 'v4.2.0', 'v5.0.0',
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 192,
      height: 192,
      decoration: BoxDecoration(
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(8), // --radius-medium
      ),
      clipBehavior: Clip.hardEdge,
      child: Scrollbar(
        thumbVisibility: true,
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(12),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Padding(
                padding: EdgeInsets.only(bottom: 8),
                child: Text(
                  'Tags',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: Color(0xFF2E2B2B), // --foreground
                    fontFamily: 'Lexend',
                  ),
                ),
              ),
              ..._tags.asMap().entries.map((e) => Container(
                decoration: BoxDecoration(
                  border: e.key < _tags.length - 1
                      ? const Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))
                      : null,
                ),
                padding: const EdgeInsets.symmetric(vertical: 6),
                child: Text(
                  e.value,
                  style: const TextStyle(
                    fontSize: 14,
                    color: Color(0xFF505258), // --secondary-foreground
                    fontFamily: 'Lexend',
                  ),
                ),
              )),
            ],
          ),
        ),
      ),
    );
  }
}
