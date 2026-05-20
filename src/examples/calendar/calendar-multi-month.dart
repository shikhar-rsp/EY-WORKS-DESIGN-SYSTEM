import 'package:flutter/material.dart';

class CalendarMultiMonth extends StatefulWidget {
  const CalendarMultiMonth({super.key});

  @override
  State<CalendarMultiMonth> createState() => _CalendarMultiMonthState();
}

class _CalendarMultiMonthState extends State<CalendarMultiMonth> {
  int _year = DateTime.now().year;
  int _month = DateTime.now().month; // 1-indexed

  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  static const _months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  void _prev() => setState(() { _month--; if (_month < 1) { _month = 12; _year--; } });
  void _next() => setState(() { _month++; if (_month > 12) { _month = 1; _year++; } });

  Widget _buildMonth(int year, int month, {bool showPrev = false, bool showNext = false}) {
    final firstDay = DateTime(year, month, 1);
    final daysInMonth = DateTime(year, month + 1, 0).day;
    final leadingBlanks = firstDay.weekday % 7;
    final today = DateTime.now();

    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        borderRadius: BorderRadius.circular(8),
        border: Border.all(color: const Color(0xFFEBE9E8)),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              showPrev
                  ? IconButton(onPressed: _prev, icon: const Icon(Icons.chevron_left, size: 16))
                  : const SizedBox(width: 40),
              Text('${_months[month - 1]} $year', style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 13)),
              showNext
                  ? IconButton(onPressed: _next, icon: const Icon(Icons.chevron_right, size: 16))
                  : const SizedBox(width: 40),
            ],
          ),
          Row(children: _weekdays.map((d) => SizedBox(width: 28, child: Text(d, textAlign: TextAlign.center, style: const TextStyle(fontSize: 11, color: Color(0xFF71717A))))).toList()),
          const SizedBox(height: 4),
          Wrap(
            children: [
              ...List.generate(leadingBlanks, (_) => const SizedBox(width: 28, height: 28)),
              ...List.generate(daysInMonth, (i) {
                final day = i + 1;
                final isToday = today.year == year && today.month == month && today.day == day;
                return Container(
                  width: 28, height: 28,
                  decoration: BoxDecoration(
                    color: isToday ? const Color(0xFFFAFAFA) : Colors.transparent,
                    borderRadius: BorderRadius.circular(4),
                  ),
                  alignment: Alignment.center,
                  child: Text('$day', style: TextStyle(fontSize: 12, fontWeight: isToday ? FontWeight.w700 : FontWeight.w400)),
                );
              }),
            ],
          ),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    int month2 = _month + 1, year2 = _year;
    if (month2 > 12) { month2 = 1; year2++; }

    return Wrap(
      spacing: 16,
      runSpacing: 16,
      children: [
        _buildMonth(_year, _month, showPrev: true),
        _buildMonth(year2, month2, showNext: true),
      ],
    );
  }
}
