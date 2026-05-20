import 'package:flutter/material.dart';

class ToggleGroupSizes extends StatelessWidget {
  const ToggleGroupSizes({super.key});

  @override
  Widget build(BuildContext context) {
    final sizes = [
      {'key': 'sm', 'height': 28.0, 'px': 6.0, 'fs': 12.0},
      {'key': 'md', 'height': 36.0, 'px': 12.0, 'fs': 14.0},
      {'key': 'lg', 'height': 40.0, 'px': 16.0, 'fs': 14.0},
    ];
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: sizes.map((sz) {
        return Padding(
          padding: const EdgeInsets.only(bottom: 16),
          child: Row(
            children: [
              SizedBox(
                width: 24,
                child: Text(
                  sz['key'] as String,
                  style: const TextStyle(fontFamily: 'Lexend', fontSize: 12, color: Color(0xFF7A7272)),
                ),
              ),
              const SizedBox(width: 16),
              Row(
                children: ['A', 'B', 'C'].asMap().entries.map((entry) {
                  final isFirst = entry.key == 0;
                  return Container(
                    height: sz['height'] as double,
                    constraints: BoxConstraints(minWidth: sz['height'] as double),
                    padding: EdgeInsets.symmetric(horizontal: sz['px'] as double),
                    decoration: BoxDecoration(
                      color: isFirst ? const Color(0xFFFAFAFA) : Colors.transparent,
                      borderRadius: BorderRadius.circular(8),
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      entry.value,
                      style: TextStyle(
                        fontFamily: 'Lexend', fontWeight: FontWeight.w500,
                        fontSize: sz['fs'] as double,
                        color: isFirst ? const Color(0xFF2E2B2B) : const Color(0xFF7A7272),
                      ),
                    ),
                  );
                }).toList(),
              ),
            ],
          ),
        );
      }).toList(),
    );
  }
}
