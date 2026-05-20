import 'package:flutter/material.dart';

class CalendarDropdownDatetime extends StatefulWidget {
  const CalendarDropdownDatetime({super.key});

  @override
  State<CalendarDropdownDatetime> createState() => _CalendarDropdownDatetimeState();
}

class _CalendarDropdownDatetimeState extends State<CalendarDropdownDatetime> {
  static const _months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  static const _weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  int _year = 2021, _month = 9;
  int? _selected;
  int _hours = 0, _mins = 0, _secs = 0;

  void _prev() => setState(() { if (_month == 0) { _month = 11; _year--; } else _month--; _selected = null; });
  void _next() => setState(() { if (_month == 11) { _month = 0; _year++; } else _month++; _selected = null; });

  Widget _timeCol(int count, int current, void Function(int) onTap) {
    return SizedBox(
      width: 56,
      child: ListView.builder(
        itemCount: count,
        itemExtent: 28,
        itemBuilder: (_, i) => GestureDetector(
          onTap: () => setState(() => onTap(i)),
          child: Container(
            padding: const EdgeInsets.only(left: 14),
            color: i == current ? const Color(0xFFFAFAFA) : Colors.transparent,
            child: Align(
              alignment: Alignment.centerLeft,
              child: Text(i.toString().padLeft(2, '0'),
                style: TextStyle(fontSize: 14, color: i == current ? const Color(0xFFF8785E) : const Color(0xFF2E2B2B), fontWeight: i == current ? FontWeight.w500 : FontWeight.w400)),
            ),
          ),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final firstDow = DateTime(_year, _month + 1, 1).weekday % 7;
    final daysInMonth = DateTime(_year, _month + 2, 0).day;
    final today = DateTime.now();

    return Container(
      height: 320,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        border: Border.all(color: const Color(0xFFEBE9E8)),
        borderRadius: BorderRadius.circular(6),
        boxShadow: const [BoxShadow(color: Color(0x26000000), blurRadius: 16, offset: Offset(0, 8))],
      ),
      child: Row(
        children: [
          // Calendar panel
          SizedBox(
            width: 280,
            child: Column(children: [
              Container(
                height: 40, padding: const EdgeInsets.symmetric(horizontal: 8),
                decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))),
                child: Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
                  IconButton(onPressed: _prev, icon: const Icon(Icons.chevron_left, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
                  Text('${_months[_month]}  $_year', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w600)),
                  IconButton(onPressed: _next, icon: const Icon(Icons.chevron_right, size: 16), padding: EdgeInsets.zero, constraints: const BoxConstraints(minWidth: 28, minHeight: 28)),
                ]),
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(8,8,8,0),
                child: Row(children: _weekdays.map((d) => Expanded(child: Center(child: Text(d, style: const TextStyle(fontSize: 12, color: Color(0xFF7A7272)))))).toList()),
              ),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(8,4,8,8),
                  child: GridView.builder(
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 7, childAspectRatio: 1.1),
                    itemCount: firstDow + daysInMonth,
                    itemBuilder: (_, index) {
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
              ),
            ]),
          ),
          // Divider
          Container(width: 1, color: const Color(0xFFEBE9E8)),
          // Time panel
          SizedBox(
            width: 169,
            child: Column(children: [
              Container(
                height: 40,
                decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFEBE9E8)))),
                child: Center(child: Text(
                  '${_hours.toString().padLeft(2,'0')}:${_mins.toString().padLeft(2,'0')}:${_secs.toString().padLeft(2,'0')}',
                  style: const TextStyle(fontSize: 14, color: Color(0xFF2E2B2B)),
                )),
              ),
              Expanded(child: Row(children: [
                _timeCol(24, _hours, (v) { _hours = v; }),
                _timeCol(60, _mins, (v) { _mins = v; }),
                _timeCol(60, _secs, (v) { _secs = v; }),
              ])),
              Container(
                padding: const EdgeInsets.all(8),
                decoration: const BoxDecoration(border: Border(top: BorderSide(color: Color(0xFFEBE9E8)))),
                child: Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                  OutlinedButton(onPressed: () {}, style: OutlinedButton.styleFrom(minimumSize: const Size(60, 30), padding: const EdgeInsets.symmetric(horizontal: 12), side: const BorderSide(color: Color(0xFFF8785E)), foregroundColor: const Color(0xFFF8785E), textStyle: const TextStyle(fontSize: 13)), child: const Text('Cancel')),
                  const SizedBox(width: 8),
                  ElevatedButton(onPressed: () {}, style: ElevatedButton.styleFrom(minimumSize: const Size(60, 30), padding: const EdgeInsets.symmetric(horizontal: 12), backgroundColor: const Color(0xFFF8785E), foregroundColor: Colors.white, elevation: 0, textStyle: const TextStyle(fontSize: 13)), child: const Text('OK')),
                ]),
              ),
            ]),
          ),
        ],
      ),
    );
  }
}
