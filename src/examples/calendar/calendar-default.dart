import 'package:flutter/material.dart';

class CalendarDefault extends StatefulWidget {
  const CalendarDefault({super.key});

  @override
  State<CalendarDefault> createState() => _CalendarDefaultState();
}

class _CalendarDefaultState extends State<CalendarDefault> {
  DateTime _month = DateTime.now();
  DateTime? _selected;

  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  static const _months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  void _prevMonth() => setState(() => _month = DateTime(_month.year, _month.month - 1));
  void _nextMonth() => setState(() => _month = DateTime(_month.year, _month.month + 1));

  @override
  Widget build(BuildContext context) {
    final firstDay = DateTime(_month.year, _month.month, 1);
    final daysInMonth = DateTime(_month.year, _month.month + 1, 0).day;
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
              IconButton(onPressed: _prevMonth, icon: const Icon(Icons.chevron_left, size: 16)),
              Text(
                '${_months[_month.month - 1]} ${_month.year}',
                style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14, color: Color(0xFF2E2B2B)),
              ),
              IconButton(onPressed: _nextMonth, icon: const Icon(Icons.chevron_right, size: 16)),
            ],
          ),
          const SizedBox(height: 8),
          Row(
            children: _weekdays.map((d) => SizedBox(
              width: 32,
              child: Text(d, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: Color(0xFF71717A), fontWeight: FontWeight.w500)),
            )).toList(),
          ),
          const SizedBox(height: 4),
          Wrap(
            children: [
              ...List.generate(leadingBlanks, (_) => const SizedBox(width: 32, height: 32)),
              ...List.generate(daysInMonth, (i) {
                final day = i + 1;
                final date = DateTime(_month.year, _month.month, day);
                final isToday = today.year == date.year && today.month == date.month && today.day == date.day;
                final isSel = _selected != null && _selected!.year == date.year && _selected!.month == date.month && _selected!.day == date.day;
                return GestureDetector(
                  onTap: () => setState(() => _selected = date),
                  child: Container(
                    width: 32,
                    height: 32,
                    decoration: BoxDecoration(
                      color: isSel ? const Color(0xFFF8785E) : isToday ? const Color(0xFFFAFAFA) : Colors.transparent,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    alignment: Alignment.center,
                    child: Text(
                      '$day',
                      style: TextStyle(
                        fontSize: 13,
                        fontWeight: isToday ? FontWeight.w700 : FontWeight.w400,
                        color: isSel ? Colors.white : const Color(0xFF2E2B2B),
                      ),
                    ),
                  ),
                );
              }),
            ],
          ),
        ],
      ),
    );
  }
}
