import 'package:flutter/material.dart';

class CalendarDropdownCaption extends StatefulWidget {
  const CalendarDropdownCaption({super.key});

  @override
  State<CalendarDropdownCaption> createState() => _CalendarDropdownCaptionState();
}

class _CalendarDropdownCaptionState extends State<CalendarDropdownCaption> {
  int _year = DateTime.now().year;
  int _month = DateTime.now().month; // 1-indexed
  DateTime? _selected;

  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  static const _months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  final List<int> _years = List.generate(11, (i) => 2020 + i);

  @override
  Widget build(BuildContext context) {
    final firstDay = DateTime(_year, _month, 1);
    final daysInMonth = DateTime(_year, _month + 1, 0).day;
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
              IconButton(
                onPressed: () => setState(() { _month--; if (_month < 1) { _month = 12; _year--; } }),
                icon: const Icon(Icons.chevron_left, size: 16),
              ),
              Row(
                children: [
                  DropdownButton<int>(
                    value: _month,
                    underline: const SizedBox(),
                    onChanged: (v) { if (v != null) setState(() => _month = v); },
                    items: List.generate(12, (i) => DropdownMenuItem(value: i + 1, child: Text(_months[i], style: const TextStyle(fontSize: 13)))),
                  ),
                  const SizedBox(width: 4),
                  DropdownButton<int>(
                    value: _year,
                    underline: const SizedBox(),
                    onChanged: (v) { if (v != null) setState(() => _year = v); },
                    items: _years.map((y) => DropdownMenuItem(value: y, child: Text('$y', style: const TextStyle(fontSize: 13)))).toList(),
                  ),
                ],
              ),
              IconButton(
                onPressed: () => setState(() { _month++; if (_month > 12) { _month = 1; _year++; } }),
                icon: const Icon(Icons.chevron_right, size: 16),
              ),
            ],
          ),
          Row(children: _weekdays.map((d) => SizedBox(width: 32, child: Text(d, textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: Color(0xFF71717A))))).toList()),
          const SizedBox(height: 4),
          Wrap(
            children: [
              ...List.generate(leadingBlanks, (_) => const SizedBox(width: 32, height: 32)),
              ...List.generate(daysInMonth, (i) {
                final day = i + 1;
                final date = DateTime(_year, _month, day);
                final isToday = today.year == date.year && today.month == date.month && today.day == date.day;
                final isSel = _selected != null && _selected!.year == date.year && _selected!.month == date.month && _selected!.day == date.day;
                return GestureDetector(
                  onTap: () => setState(() => _selected = date),
                  child: Container(
                    width: 32, height: 32,
                    decoration: BoxDecoration(
                      color: isSel ? const Color(0xFFF8785E) : isToday ? const Color(0xFFFAFAFA) : Colors.transparent,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    alignment: Alignment.center,
                    child: Text('$day', style: TextStyle(fontSize: 13, color: isSel ? Colors.white : const Color(0xFF2E2B2B))),
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
