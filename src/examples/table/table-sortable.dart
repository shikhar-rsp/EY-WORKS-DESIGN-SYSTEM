import 'package:flutter/material.dart';

class TableSortable extends StatefulWidget {
  const TableSortable({super.key});

  @override
  State<TableSortable> createState() => _TableSortableState();
}

class _TableSortableState extends State<TableSortable> {
  int _sortColumnIndex = 0;
  bool _sortAscending = true;

  final List<Map<String, dynamic>> _rows = [
    {'product': 'Dashboard Pro', 'category': 'Analytics', 'price': '\$49/mo', 'seats': 12},
    {'product': 'Storage Plus', 'category': 'Infrastructure', 'price': '\$29/mo', 'seats': 8},
    {'product': 'Auth Shield', 'category': 'Security', 'price': '\$19/mo', 'seats': 25},
    {'product': 'Notify Hub', 'category': 'Messaging', 'price': '\$9/mo', 'seats': 5},
  ];

  List<Map<String, dynamic>> get _sortedRows {
    final keys = ['product', 'category', 'price', 'seats'];
    final key = keys[_sortColumnIndex];
    final sorted = [..._rows];
    sorted.sort((a, b) {
      final av = a[key];
      final bv = b[key];
      int cmp;
      if (av is int && bv is int) {
        cmp = av.compareTo(bv);
      } else {
        cmp = av.toString().compareTo(bv.toString());
      }
      return _sortAscending ? cmp : -cmp;
    });
    return sorted;
  }

  void _sort(int colIndex) {
    setState(() {
      if (_sortColumnIndex == colIndex) {
        _sortAscending = !_sortAscending;
      } else {
        _sortColumnIndex = colIndex;
        _sortAscending = true;
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final sorted = _sortedRows;
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16), // --radius-large
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFFEBE9E8)), // --border
            borderRadius: BorderRadius.circular(16),
          ),
          child: Column(
            children: [
              // Header
              Container(
                color: const Color(0xFFF4F4F4), // --secondary
                height: 40,
                child: Row(
                  children: [
                    Expanded(flex: 2, child: _SortableHeader(label: 'Product', index: 0, currentIndex: _sortColumnIndex, ascending: _sortAscending, onTap: _sort)),
                    Expanded(flex: 2, child: _SortableHeader(label: 'Category', index: 1, currentIndex: _sortColumnIndex, ascending: _sortAscending, onTap: _sort)),
                    Expanded(flex: 1, child: _SortableHeader(label: 'Pricing', index: 2, currentIndex: _sortColumnIndex, ascending: _sortAscending, onTap: _sort, alignRight: true)),
                    Expanded(flex: 1, child: _SortableHeader(label: 'Seats', index: 3, currentIndex: _sortColumnIndex, ascending: _sortAscending, onTap: _sort, alignRight: true)),
                  ],
                ),
              ),
              // Rows
              ...sorted.asMap().entries.map((e) {
                final row = e.value;
                final isLast = e.key == sorted.length - 1;
                return Container(
                  decoration: BoxDecoration(
                    color: const Color(0xFFFFFFFF), // --background
                    border: isLast ? null : const Border(bottom: BorderSide(color: Color(0xFFEBE9E8))),
                  ),
                  height: 72,
                  child: Row(
                    children: [
                      Expanded(flex: 2, child: _DataCell(child: Text(row['product'] as String, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))))),
                      Expanded(flex: 2, child: _DataCell(child: Text(row['category'] as String, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))))),
                      Expanded(flex: 1, child: _DataCell(alignRight: true, child: Text(row['price'] as String, style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF2E2B2B))))),
                      Expanded(flex: 1, child: _DataCell(alignRight: true, child: Text('${row['seats']}', style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))))),
                    ],
                  ),
                );
              }),
            ],
          ),
        ),
      ),
    );
  }
}

class _SortableHeader extends StatelessWidget {
  final String label;
  final int index;
  final int currentIndex;
  final bool ascending;
  final void Function(int) onTap;
  final bool alignRight;

  const _SortableHeader({
    required this.label,
    required this.index,
    required this.currentIndex,
    required this.ascending,
    required this.onTap,
    this.alignRight = false,
  });

  @override
  Widget build(BuildContext context) {
    final isActive = currentIndex == index;
    return GestureDetector(
      onTap: () => onTap(index),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16),
        alignment: alignRight ? Alignment.centerRight : Alignment.centerLeft,
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(
              label.toUpperCase(),
              style: const TextStyle(fontFamily: 'Lexend', fontWeight: FontWeight.w500, fontSize: 12, letterSpacing: 0.6, color: Color(0xFF7A7272)),
            ),
            const SizedBox(width: 4),
            Icon(
              isActive ? (ascending ? Icons.arrow_upward : Icons.arrow_downward) : Icons.unfold_more,
              size: 12,
              color: const Color(0xFF7A7272), // --muted-foreground
            ),
          ],
        ),
      ),
    );
  }
}

class _DataCell extends StatelessWidget {
  final Widget child;
  final bool alignRight;

  const _DataCell({required this.child, this.alignRight = false});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Align(
        alignment: alignRight ? Alignment.centerRight : Alignment.centerLeft,
        child: child,
      ),
    );
  }
}
