import 'package:flutter/material.dart';

class CalendarDropdownDate extends StatefulWidget {
  const CalendarDropdownDate({super.key});

  @override
  State<CalendarDropdownDate> createState() => _CalendarDropdownDateState();
}

class _CalendarDropdownDateState extends State<CalendarDropdownDate> {
  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  static const _months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  int _year = 2021;
  int _month = 9; // October (0-indexed)
  int? _selected;

  void _prev() => setState(() { if (_month == 0) { _month = 11; _year--; } else _month--; _selected = null; });
  void _next() => setState(() { if (_month == 11) { _month = 0; _year++; } else _month++; _selected = null; });

  @override
  Widget build(BuildContext context) {
    final today = DateTime.now();
    final firstDow = DateTime(_year, _month + 1, 1).weekday % 7;
    final daysInMonth = DateTime(_year, _month + 2, 0).day;

    return Container(
      width: 280,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        border: Border.all(color: const Color(0xFFEBE9E8)), // --border
        borderRadius: BorderRadius.circular(6),
        boxShadow: const [BoxShadow(color: Color(0x26000000), blurRadius: 16, offset: Offset(0, 8))],
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Header
          Container(
            height: 40, padding: const EdgeInsets.symmetric(horizontal: 8),
            decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                IconButton(onPressed: _prev, icon: const Icon(Icons.chevron_left, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
                Text('${_months[_month]}  $_year', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
                IconButton(onPressed: _next, icon: const Icon(Icons.chevron_right, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
              ],
            ),
          ),
          // Weekday row
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 8, 8, 0),
            child: Row(children: _weekdays.map((d) => Expanded(child: Center(child: Text(d, style: const TextStyle(fontSize: 12, color: Color(0xFF7A7272)))))).toList()),
          ),
          // Day grid
          Padding(
            padding: const EdgeInsets.fromLTRB(8, 4, 8, 8),
            child: GridView.builder(
              shrinkWrap: true,
              physics: const NeverScrollableScrollPhysics(),
              gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 7, childAspectRatio: 1.1),
              itemCount: firstDow + daysInMonth,
              itemBuilder: (context, index) {
                if (index < firstDow) return const SizedBox.shrink();
                final day = index - firstDow + 1;
                final isSel = day == _selected;
                final isTod = today.year == _year && today.month == _month + 1 && today.day == day;
                return GestureDetector(
                  onTap: () => setState(() => _selected = day),
                  child: Container(
                    margin: const EdgeInsets.all(1),
                    decoration: BoxDecoration(
                      color: isSel ? const Color(0xFFF8785E) : isTod ? const Color(0xFFFAFAFA) : Colors.transparent,
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Center(child: Text('$day', style: TextStyle(fontSize: 13, color: isSel ? Colors.white : const Color(0xFF2E2B2B), fontWeight: isTod ? FontWeight.w700 : FontWeight.w400))),
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
