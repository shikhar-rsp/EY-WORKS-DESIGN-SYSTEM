import 'package:flutter/material.dart';

class CalendarDropdownRange extends StatefulWidget {
  const CalendarDropdownRange({super.key});

  @override
  State<CalendarDropdownRange> createState() => _CalendarDropdownRangeState();
}

class _CalendarDropdownRangeState extends State<CalendarDropdownRange> {
  static const _months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  int _year = DateTime.now().year;
  int _month = DateTime.now().month - 1;
  int? _startDay, _endDay;
  bool _pickEnd = false;

  int get _month2 => _month == 11 ? 0 : _month + 1;
  int get _year2 => _month == 11 ? _year + 1 : _year;

  void _prev() => setState(() { if (_month == 0) { _month = 11; _year--; } else _month--; });
  void _next() => setState(() { if (_month == 11) { _month = 0; _year++; } else _month++; });

  bool _inRange(int day, bool isSecondMonth) {
    if (_startDay == null || _endDay == null) return false;
    return !isSecondMonth && day > _startDay! && day < _endDay!;
  }

  void _select(int day) {
    setState(() {
      if (!_pickEnd) { _startDay = day; _endDay = null; _pickEnd = true; }
      else {
        final s = _startDay!;
        _startDay = day < s ? day : s;
        _endDay = day >= s ? day : s;
        _pickEnd = false;
      }
    });
  }

  Widget _buildGrid(int year, int month, bool isSecond) {
    final firstDow = DateTime(year, month + 1, 1).weekday % 7;
    final dim = DateTime(year, month + 2, 0).day;
    final today = DateTime.now();
    return Column(
      children: [
        Container(
          height: 40, padding: const EdgeInsets.symmetric(horizontal: 8),
          decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))),
          child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            if (!isSecond) IconButton(onPressed: _prev, icon: const Icon(Icons.chevron_left, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)) else const SizedBox(width: 28),
            Text('${_months[month]}  $year', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: Color(0xFF2E2B2B))),
            if (isSecond) IconButton(onPressed: _next, icon: const Icon(Icons.chevron_right, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)) else const SizedBox(width: 28),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(8,8,8,0),
          child: Row(children: _weekdays.map((d) => Expanded(child: Center(child: Text(d, style: const TextStyle(fontSize: 12, color: Color(0xFF7A7272)))))).toList()),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(8,4,8,8),
          child: GridView.builder(
            shrinkWrap: true, physics: const NeverScrollableScrollPhysics(),
            gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 7, childAspectRatio: 1.1),
            itemCount: firstDow + dim,
            itemBuilder: (_, index) {
              if (index < firstDow) return const SizedBox.shrink();
              final day = index - firstDow + 1;
              final isSel = !isSecond && (day == _startDay || day == _endDay);
              final isRng = !isSecond && _inRange(day, isSecond);
              final isTod = today.year == year && today.month == month + 1 && today.day == day;
              return GestureDetector(
                onTap: !isSecond ? () => _select(day) : null,
                child: Container(
                  margin: const EdgeInsets.all(1),
                  decoration: BoxDecoration(
                    color: isSel ? const Color(0xFFF8785E) : isRng ? const Color(0xFFFEE4DF) : isTod ? const Color(0xFFFAFAFA) : Colors.transparent,
                    borderRadius: BorderRadius.circular(4),
                  ),
                  child: Center(child: Text('$day', style: TextStyle(fontSize: 13, color: isSel ? Colors.white : const Color(0xFF2E2B2B), fontWeight: isTod ? FontWeight.w700 : FontWeight.w400))),
                ),
              );
            },
          ),
        ),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        border: Border.all(color: const Color(0xFFEBE9E8)),
        borderRadius: const BorderRadius.only(topLeft: Radius.circular(6), topRight: Radius.circular(6)),
        boxShadow: const [BoxShadow(color: Color(0x26000000), blurRadius: 16, offset: Offset(0, 8))],
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          SizedBox(width: 280, child: _buildGrid(_year, _month, false)),
          Container(width: 1, color: const Color(0xFFEBE9E8)),
          SizedBox(width: 280, child: _buildGrid(_year2, _month2, true)),
        ],
      ),
    );
  }
}
