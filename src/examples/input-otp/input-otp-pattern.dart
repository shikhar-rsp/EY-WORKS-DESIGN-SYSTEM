import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

class InputOtpPattern extends StatefulWidget {
  const InputOtpPattern({super.key});

  @override
  State<InputOtpPattern> createState() => _InputOtpPatternState();
}

class _InputOtpPatternState extends State<InputOtpPattern> {
  final List<TextEditingController> _controllers =
      List.generate(6, (_) => TextEditingController());
  final List<FocusNode> _focusNodes = List.generate(6, (_) => FocusNode());

  @override
  void dispose() {
    for (final c in _controllers) c.dispose();
    for (final f in _focusNodes) f.dispose();
    super.dispose();
  }

  Widget _buildSlot(int index, {bool isFirst = false, bool isLast = false}) {
    return SizedBox(
      width: 40,
      height: 40,
      child: Container(
        decoration: BoxDecoration(
          color: const Color(0xFFFFFFFF), // --background
          border: Border(
            top: const BorderSide(color: Color(0xFFADA5A5)), // --border-input
            bottom: const BorderSide(color: Color(0xFFADA5A5)),
            right: const BorderSide(color: Color(0xFFADA5A5)),
            left: isFirst
                ? const BorderSide(color: Color(0xFFADA5A5))
                : BorderSide.none,
          ),
          borderRadius: isFirst
              ? const BorderRadius.only(
                  topLeft: Radius.circular(8),
                  bottomLeft: Radius.circular(8),
                )
              : isLast
                  ? const BorderRadius.only(
                      topRight: Radius.circular(8),
                      bottomRight: Radius.circular(8),
                    )
                  : BorderRadius.zero,
        ),
        child: TextField(
          controller: _controllers[index],
          focusNode: _focusNodes[index],
          maxLength: 1,
          textAlign: TextAlign.center,
          inputFormatters: [FilteringTextInputFormatter.allow(RegExp(r'[a-zA-Z0-9]'))],
          decoration: const InputDecoration(counterText: '', border: InputBorder.none),
          style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w500, color: Color(0xFF2E2B2B)),
          onChanged: (val) {
            if (val.isNotEmpty && index < 5) {
              _focusNodes[index + 1].requestFocus();
            }
          },
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisSize: MainAxisSize.min,
      children: List.generate(
        6,
        (i) => _buildSlot(i, isFirst: i == 0, isLast: i == 5),
      ),
    );
  }
}
