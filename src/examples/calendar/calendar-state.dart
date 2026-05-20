import 'package:flutter/material.dart';

class _StateBar {
  final String label;
  final Color border;
  final Color bg;

  const _StateBar({
    required this.label,
    required this.border,
    required this.bg,
  });
}

class CalendarState extends StatelessWidget {
  const CalendarState({super.key});

  static const List<_StateBar> _states = [
    _StateBar(
      label: 'Holiday',
      border: Color(0xFFCC0000),
      bg: Color(0xFFFFE5E5),
    ),
    _StateBar(
      label: 'Sick Leave',
      border: Color(0xFFD97706),
      bg: Color(0xFFFEF3C7),
    ),
    _StateBar(
      label: 'Birthday',
      border: Color(0xFFB24F8C),
      bg: Color(0xFFF8E0EE),
    ),
    _StateBar(
      label: 'Event',
      border: Color(0xFF505EAC),
      bg: Color(0xFFE0E3F6),
    ),
    _StateBar(
      label: 'Room Movement',
      border: Color(0xFF358EAC),
      bg: Color(0xFFD9F0F7),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 280,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: _states
            .map(
              (s) => Container(
                margin: const EdgeInsets.only(bottom: 6),
                padding: const EdgeInsets.symmetric(
                    horizontal: 10, vertical: 6),
                decoration: BoxDecoration(
                  color: s.bg,
                  border: Border.all(color: s.border),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Row(
                  children: [
                    Container(
                      width: 3,
                      height: 20,
                      decoration: BoxDecoration(
                        color: s.border,
                        borderRadius: BorderRadius.circular(99),
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(
                      s.label,
                      style: TextStyle(
                        fontSize: 12,
                        fontWeight: FontWeight.w500,
                        color: s.border,
                      ),
                    ),
                  ],
                ),
              ),
            )
            .toList(),
      ),
    );
  }
}
