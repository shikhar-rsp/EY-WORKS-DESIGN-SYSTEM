import 'package:flutter/material.dart';

// Token references:
// --primary: #f8785e  --primary-hover: #cf624c  --primary-foreground: #ffffff
// --background: #ffffff  --border: #ebe9e8
// --foreground: #2e2b2b  --muted-foreground: #7a7272
// --disabled-surface: #f0efef  --disabled: #b0abab

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

class StepsInteractive extends StatefulWidget {
  const StepsInteractive({super.key});

  @override
  State<StepsInteractive> createState() => _StepsInteractiveState();
}

class _StepsInteractiveState extends State<StepsInteractive> {
  static const List<_StepData> _steps = [
    _StepData(value: '1', title: 'Account', description: 'Create your account'),
    _StepData(value: '2', title: 'Billing', description: 'Add payment method'),
    _StepData(value: '3', title: 'Confirm', description: 'Review and confirm'),
  ];

  int _currentIndex = 0;

  _StepStatus _getStatus(int index) {
    if (index < _currentIndex) return _StepStatus.complete;
    if (index == _currentIndex) return _StepStatus.current;
    return _StepStatus.upcoming;
  }

  void _goBack() {
    if (_currentIndex > 0) setState(() => _currentIndex--);
  }

  void _goNext() {
    if (_currentIndex < _steps.length - 1) setState(() => _currentIndex++);
  }

  void _goTo(int index) {
    setState(() => _currentIndex = index);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 512),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            // Steps track
            Row(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                for (int i = 0; i < _steps.length; i++) ...[
                  Expanded(
                    child: GestureDetector(
                      onTap: () => _goTo(i),
                      child: _StepItemWidget(
                        step: _steps[i],
                        status: _getStatus(i),
                        index: i,
                      ),
                    ),
                  ),
                  if (i < _steps.length - 1)
                    Padding(
                      padding: const EdgeInsets.only(top: 15, left: 4, right: 4),
                      child: SizedBox(
                        width: 24,
                        height: 2,
                        child: ColoredBox(color: const Color(0xFFEBE9E8)),
                      ),
                    ),
                ],
              ],
            ),
            const SizedBox(height: 24),
            // Navigation buttons
            Row(
              children: [
                // Back button
                OutlinedButton(
                  onPressed: _currentIndex > 0 ? _goBack : null,
                  style: OutlinedButton.styleFrom(
                    side: const BorderSide(color: Color(0xFFEBE9E8)),
                    foregroundColor: const Color(0xFF2E2B2B),
                    disabledForegroundColor: const Color(0xFFB0ABAB),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  child: const Text('Back'),
                ),
                const SizedBox(width: 12),
                // Next/Finish button
                ElevatedButton(
                  onPressed: _currentIndex < _steps.length - 1 ? _goNext : null,
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFF8785E), // --primary
                    disabledBackgroundColor: const Color(0xFFF0EFEF), // --disabled-surface
                    foregroundColor: Colors.white, // --primary-foreground
                    disabledForegroundColor: const Color(0xFFB0ABAB), // --disabled
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                    textStyle: const TextStyle(
                      fontFamily: 'Lexend',
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                    ),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                    elevation: 0,
                  ),
                  child: Text(_currentIndex == _steps.length - 1 ? 'Finish' : 'Next'),
                ),
                const SizedBox(width: 12),
                // Step label
                Text(
                  'Step ${_currentIndex + 1} of ${_steps.length}',
                  style: const TextStyle(
                    fontFamily: 'Lexend',
                    fontSize: 12,
                    color: Color(0xFF7A7272), // --muted-foreground
                  ),
                ),
              ],
            ),
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
        ? const Color(0xFFF8785E)
        : Colors.white;
    final Color indicatorBorder = status == _StepStatus.upcoming
        ? const Color(0xFFEBE9E8)
        : const Color(0xFFF8785E);
    final Color indicatorColor = status == _StepStatus.complete
        ? Colors.white
        : status == _StepStatus.current
          ? const Color(0xFFF8785E)
          : const Color(0xFF7A7272);
    final Color titleColor = status == _StepStatus.upcoming
        ? const Color(0xFF7A7272)
        : const Color(0xFF2E2B2B);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.center,
      mainAxisSize: MainAxisSize.min,
      children: [
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
        Text(
          step.title,
          style: TextStyle(
            fontFamily: 'Lexend',
            fontSize: 14,
            fontWeight: FontWeight.w500,
            color: titleColor,
          ),
          textAlign: TextAlign.center,
        ),
        const SizedBox(height: 4),
        Text(
          step.description,
          style: const TextStyle(
            fontFamily: 'Lexend',
            fontSize: 12,
            color: Color(0xFF7A7272),
          ),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }
}
