import 'package:flutter/material.dart';

class _EventType {
  final String label;
  final Color border;
  final Color bg;

  const _EventType({
    required this.label,
    required this.border,
    required this.bg,
  });
}

class CalendarEventTypes extends StatelessWidget {
  const CalendarEventTypes({super.key});

  static const List<_EventType> _events = [
    _EventType(label: 'Session', border: Color(0xFF2D70CF), bg: Color(0xFFD7E8FF)),
    _EventType(label: 'Event', border: Color(0xFF505EAC), bg: Color(0xFFE0E3F6)),
    _EventType(label: 'Birthday', border: Color(0xFFB24F8C), bg: Color(0xFFF8E0EE)),
    _EventType(label: 'Festival', border: Color(0xFFD97706), bg: Color(0xFFFEF3C7)),
    _EventType(label: 'Leave', border: Color(0xFF65A30D), bg: Color(0xFFECFCCB)),
  ];

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 260,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: _events
            .map(
              (e) => Container(
                margin: const EdgeInsets.only(bottom: 8),
                padding: const EdgeInsets.symmetric(
                    horizontal: 12, vertical: 8),
                decoration: BoxDecoration(
                  color: e.bg,
                  border: Border.all(color: e.border),
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Row(
                  children: [
                    Container(
                      width: 8,
                      height: 8,
                      decoration: BoxDecoration(
                        color: e.border,
                        shape: BoxShape.circle,
                      ),
                    ),
                    const SizedBox(width: 10),
                    Text(
                      e.label,
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: FontWeight.w500,
                        color: e.border,
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
