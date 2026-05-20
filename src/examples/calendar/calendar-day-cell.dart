import 'package:flutter/material.dart';

class _EventBar {
  final String label;
  final Color border;
  final Color bg;
  final Color textColor;

  const _EventBar({
    required this.label,
    required this.border,
    required this.bg,
    required this.textColor,
  });
}

class CalendarDayCell extends StatelessWidget {
  const CalendarDayCell({super.key});

  static const List<_EventBar> _events = [
    _EventBar(
      label: 'Morning Session',
      border: Color(0xFF2D70CF),
      bg: Color(0xFFD7E8FF),
      textColor: Color(0xFF2D70CF),
    ),
    _EventBar(
      label: 'Team Event',
      border: Color(0xFF505EAC),
      bg: Color(0xFFE0E3F6),
      textColor: Color(0xFF505EAC),
    ),
    _EventBar(
      label: "Sara's Birthday",
      border: Color(0xFFB24F8C),
      bg: Color(0xFFF8E0EE),
      textColor: Color(0xFFB24F8C),
    ),
    _EventBar(
      label: 'Festival Day',
      border: Color(0xFFD97706),
      bg: Color(0xFFFEF3C7),
      textColor: Color(0xFFD97706),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 222,
      height: 209,
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.white,
        border: Border.all(color: const Color(0xFFD1D5DB)),
        borderRadius: BorderRadius.circular(4),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: const [
              Text(
                '21',
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: FontWeight.w600,
                  color: Color(0xFF1A1A1A),
                ),
              ),
              Text(
                'Thu',
                style: TextStyle(
                  fontSize: 11,
                  color: Color(0xFF6B7280),
                ),
              ),
            ],
          ),
          const SizedBox(height: 6),
          ..._events.map(
            (e) => Container(
              margin: const EdgeInsets.only(bottom: 4),
              padding:
                  const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
              decoration: BoxDecoration(
                color: e.bg,
                border: Border.all(color: e.border),
                borderRadius: BorderRadius.circular(3),
              ),
              child: Text(
                e.label,
                style: TextStyle(
                  fontSize: 11,
                  fontWeight: FontWeight.w500,
                  color: e.textColor,
                ),
                overflow: TextOverflow.ellipsis,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
