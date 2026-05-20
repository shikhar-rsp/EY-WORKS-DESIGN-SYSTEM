import 'package:flutter/material.dart';

class TableBasic extends StatelessWidget {
  const TableBasic({super.key});

  static const _rows = [
    ['Alice Johnson', 'Designer', 'Product', 'Active'],
    ['Bob Smith', 'Engineer', 'Platform', 'Active'],
    ['Carol White', 'PM', 'Growth', 'Inactive'],
    ['David Lee', 'Analyst', 'Data', 'Active'],
  ];

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(16), // --radius-large
        child: Container(
          decoration: BoxDecoration(
            border: Border.all(color: const Color(0xFFEBE9E8)), // --border
            borderRadius: BorderRadius.circular(16),
          ),
          child: Table(
            columnWidths: const {
              0: FlexColumnWidth(2),
              1: FlexColumnWidth(1),
              2: FlexColumnWidth(1),
              3: FlexColumnWidth(1),
            },
            children: [
              _buildHeader(),
              ..._rows.asMap().entries.map((e) => _buildRow(e.value, e.key == _rows.length - 1)),
            ],
          ),
        ),
      ),
    );
  }

  TableRow _buildHeader() {
    return TableRow(
      decoration: const BoxDecoration(color: Color(0xFFF4F4F4)), // --secondary
      children: [
        _HeaderCell(label: 'Name', sortable: true),
        const _HeaderCell(label: 'Role'),
        const _HeaderCell(label: 'Department'),
        const _HeaderCell(label: 'Status', alignRight: true),
      ],
    );
  }

  TableRow _buildRow(List<String> row, bool isLast) {
    return TableRow(
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF), // --background
        border: isLast ? null : const Border(bottom: BorderSide(color: Color(0xFFEBE9E8))), // --border
      ),
      children: [
        _DataCell(
          child: Text(row[0], style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B))), // --foreground
        ),
        _DataCell(
          child: Text(row[1], style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))), // --muted-foreground
        ),
        _DataCell(
          child: Text(row[2], style: const TextStyle(fontFamily: 'Lexend', fontSize: 14, color: Color(0xFF7A7272))), // --muted-foreground
        ),
        _DataCell(
          alignRight: true,
          child: _StatusBadge(status: row[3]),
        ),
      ],
    );
  }
}

class _HeaderCell extends StatelessWidget {
  final String label;
  final bool sortable;
  final bool alignRight;

  const _HeaderCell({required this.label, this.sortable = false, this.alignRight = false});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 40,
      padding: const EdgeInsets.symmetric(horizontal: 16), // --space-200
      alignment: alignRight ? Alignment.centerRight : Alignment.centerLeft,
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Text(
            label.toUpperCase(),
            style: const TextStyle(
              fontFamily: 'Lexend',
              fontWeight: FontWeight.w500,
              fontSize: 12,
              letterSpacing: 0.05 * 12,
              color: Color(0xFF7A7272), // --muted-foreground
            ),
          ),
          if (sortable) ...[
            const SizedBox(width: 4),
            const Icon(Icons.unfold_more, size: 12, color: Color(0xFF7A7272)),
          ],
        ],
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
    return Container(
      height: 72,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8), // --space-200, --space-100
      alignment: alignRight ? Alignment.centerRight : Alignment.centerLeft,
      child: child,
    );
  }
}

class _StatusBadge extends StatelessWidget {
  final String status;

  const _StatusBadge({required this.status});

  @override
  Widget build(BuildContext context) {
    final isActive = status == 'Active';
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 2),
      decoration: BoxDecoration(
        color: isActive ? const Color(0xFF65A30D).withOpacity(0.1) : const Color(0xFFFAFAFA), // --success / --muted
        borderRadius: BorderRadius.circular(99), // --radius-full
      ),
      child: Text(
        status,
        style: TextStyle(
          fontFamily: 'Lexend',
          fontSize: 12,
          fontWeight: FontWeight.w500,
          color: isActive ? const Color(0xFF65A30D) : const Color(0xFF7A7272), // --success / --muted-foreground
        ),
      ),
    );
  }
}
