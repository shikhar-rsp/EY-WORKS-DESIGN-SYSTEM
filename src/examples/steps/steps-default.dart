import 'package:flutter/material.dart';

// Token references:
// --primary: #f8785e  --primary-foreground: #ffffff
// --background: #ffffff  --border: #ebe9e8
// --foreground: #2e2b2b  --muted-foreground: #7a7272

enum _StepStatus { complete, current, upcoming }

class _StepData {
  final String value;
  final String title;
  final String description;

  const _StepData({
    required this.value,
    required this.title,
    required this.description,
  });
}

class StepsDefault extends StatelessWidget {
  const StepsDefault({super.key});

  static const List<_StepData> _steps = [
    _StepData(value: '1', title: 'Account', description: 'Create your account'),
    _StepData(value: '2', title: 'Billing', description: 'Add payment method'),
    _StepData(value: '3', title: 'Confirm', description: 'Review and confirm'),
  ];

  static const String _currentValue = '2';

  _StepStatus _getStatus(int index) {
    final currentIndex = _steps.indexWhere((s) => s.value == _currentValue);
    if (index < currentIndex) return _StepStatus.complete;
    if (index == currentIndex) return _StepStatus.current;
    return _StepStatus.upcoming;
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 512),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            for (int i = 0; i < _steps.length; i++) ...[
              Expanded(
                child: _StepItemWidget(
                  step: _steps[i],
                  status: _getStatus(i),
                  index: i,
                ),
              ),
              if (i < _steps.length - 1)
                Padding(
                  padding: const EdgeInsets.only(top: 15, left: 4, right: 4),
                  child: SizedBox(
                    width: 24,
                    height: 2,
                    child: ColoredBox(color: const Color(0xFFEBE9E8)), // --border
                  ),
                ),
            ],
          ],
        ),
      ),
    );
  }
}

class _StepItemWidget extends StatelessWidget {
  final _StepData step;
  final _StepStatus status;
  final int index;

  const _StepItemWidget({
    required this.step,
    required this.status,
    required this.index,
  });

  @override
  Widget build(BuildContext context) {
    final Color indicatorBg = status == _StepStatus.complete
        ? const Color(0xFFF8785E) // --primary
        : Colors.white;            // --background
    final Color indicatorBorder = status == _StepStatus.upcoming
        ? const Color(0xFFEBE9E8) // --border
        : const Color(0xFFF8785E); // --primary
    final Color indicatorColor = status == _StepStatus.complete
        ? Colors.white                   // --primary-foreground
        : status == _StepStatus.current
          ? const Color(0xFFF8785E)       // --primary
          : const Color(0xFF7A7272);      // --muted-foreground
    final Color titleColor = status == _StepStatus.upcoming
        ? const Color(0xFF7A7272)  // --muted-foreground
        : const Color(0xFF2E2B2B); // --foreground

    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
        // Indicator circle
        Container(
          width: 32,
          height: 32,
          decoration: BoxDecoration(
            color: indicatorBg,
            shape: BoxShape.circle,
            border: Border.all(color: indicatorBorder, width: 2),
          ),
          alignment: Alignment.center,
          child: status == _StepStatus.complete
              ? Icon(Icons.check, size: 16, color: indicatorColor)
              : Text(
                  '${index + 1}',
                  style: TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: indicatorColor,
                  ),
                ),
        ),
        const SizedBox(height: 8),
        // Title
        Text(
          step.title,
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: titleColor,
            height: 1,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 4),
        // Description
        Text(
          step.description,
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272), // --muted-foreground
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
