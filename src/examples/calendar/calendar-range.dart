import 'package:flutter/material.dart';

class CalendarRange extends StatefulWidget {
  const CalendarRange({super.key});

  @override
  State<CalendarRange> createState() => _CalendarRangeState();
}

class _CalendarRangeState extends State<CalendarRange> {
  DateTime _month = DateTime(2024, 10);
  DateTime? _from = DateTime(2024, 10, 10);
  DateTime? _to = DateTime(2024, 10, 18);

  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  static const _months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  void _selectDay(int day) {
    final date = DateTime(_month.year, _month.month, day);
    setState(() {
      if (_from == null || (_from != null && _to != null)) {
        _from = date; _to = null;
      } else if (date.isBefore(_from!)) {
        _to = _from; _from = date;
      } else {
        _to = date;
      }
    });
  }

  bool _isFrom(int d) => _from != null && _from!.year == _month.year && _from!.month == _month.month && _from!.day == d;
  bool _isTo(int d) => _to != null && _to!.year == _month.year && _to!.month == _month.month && _to!.day == d;
  bool _inRange(int d) {
    if (_from == null || _to == null) return false;
    final date = DateTime(_month.year, _month.month, d);
    return date.isAfter(_from!) && date.isBefore(_to!);
  }

  @override
  Widget build(BuildContext context) {
    final firstDay = DateTime(_month.year, _month.month, 1);
    final daysInMonth = DateTime(_month.year, _month.month + 1, 0).day;
    final leadingBlanks = firstDay.weekday % 7;

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
              IconButton(onPressed: () => setState(() => _month = DateTime(_month.year, _month.month - 1)), icon: const Icon(Icons.chevron_left, size: 16)),
              Text('${_months[_month.month - 1]} ${_month.year}', style: const TextStyle(fontWeight: FontWeight.w600, fontSize: 14)),
              IconButton(onPressed: () => setState(() => _month = DateTime(_month.year, _month.month + 1)), icon: const Icon(Icons.chevron_right, size: 16)),
            ],
          ),
          Row(children: _weekdays.map((d) => SizedBox(width: 32, child: Text(d, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: Color(0xFF71717A))))).toList()),
          const SizedBox(height: 4),
          Wrap(
            children: [
              ...List.generate(leadingBlanks, (_) => const SizedBox(width: 32, height: 32)),
              ...List.generate(daysInMonth, (i) {
                final d = i + 1;
                final isEndpoint = _isFrom(d) || _isTo(d);
                final inR = _inRange(d);
                return GestureDetector(
                  onTap: () => _selectDay(d),
                  child: Container(
                    width: 32, height: 32,
                    decoration: BoxDecoration(
                      color: isEndpoint ? const Color(0xFFF8785E) : inR ? const Color(0xFFFDE8E4) : Colors.transparent,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    alignment: Alignment.center,
                    child: Text('$d', style: TextStyle(fontSize: 13, color: isEndpoint ? Colors.white : const Color(0xFF2E2B2B))),
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
