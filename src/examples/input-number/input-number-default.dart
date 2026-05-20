import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() {
  runApp(const MaterialApp(home: Scaffold(body: Center(child: InputNumberDefault()))));
}

class InputNumberDefault extends StatefulWidget {
  const InputNumberDefault({super.key});

  @override
  State<InputNumberDefault> createState() => _InputNumberDefaultState();
}

class _InputNumberDefaultState extends State<InputNumberDefault> {
  int _value = 1;
  final int _min = 0;
  final int _max = 100;
  final int _step = 1;

  late final TextEditingController _controller;

  @override
  void initState() {
    super.initState();
    _controller = TextEditingController(text: _value.toString());
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _clampAndSet(int v) {
    setState(() {
      _value = v.clamp(_min, _max);
      _controller.text = _value.toString();
      _controller.selection = TextSelection.collapsed(offset: _controller.text.length);
    });
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 36,
      decoration: BoxDecoration(
        color: const Color(0xFFFFFFFF),
        border: Border.all(color: const Color(0xFFEBE9E8)),
        borderRadius: BorderRadius.circular(8),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          // Decrement button
          _StepButton(
            icon: Icons.remove,
            onPressed: _value <= _min ? null : () => _clampAndSet(_value - _step),
            isLeft: true,
          ),
          // Field
          SizedBox(
            width: 56,
            child: TextField(
              controller: _controller,
              textAlign: TextAlign.center,
              keyboardType: TextInputType.number,
              inputFormatters: [FilteringTextInputFormatter.digitsOnly],
              style: const TextStyle(
                fontFamily: 'Lexend',
                fontSize: 14,
                color: Color(0xFF2E2B2B),
              ),
              decoration: const InputDecoration(
                border: InputBorder.none,
                contentPadding: EdgeInsets.symmetric(horizontal: 8),
                isDense: true,
              ),
              onSubmitted: (v) {
                final parsed = int.tryParse(v);
                if (parsed != null) _clampAndSet(parsed);
              },
            ),
          ),
          // Increment button
          _StepButton(
            icon: Icons.add,
            onPressed: _value >= _max ? null : () => _clampAndSet(_value + _step),
            isLeft: false,
          ),
        ],
      ),
    );
  }
}

class _StepButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onPressed;
  final bool isLeft;

  const _StepButton({
    required this.icon,
    required this.onPressed,
    required this.isLeft,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 32,
      height: double.infinity,
      child: Material(
        color: Colors.transparent,
        child: InkWell(
          borderRadius: isLeft
              ? const BorderRadius.only(
                  topLeft: Radius.circular(8),
                  bottomLeft: Radius.circular(8),
                )
              : const BorderRadius.only(
                  topRight: Radius.circular(8),
                  bottomRight: Radius.circular(8),
                ),
          onTap: onPressed,
          child: Container(
            decoration: BoxDecoration(
              border: isLeft
                  ? const Border(right: BorderSide(color: Color(0xFFEBE9E8)))
                  : const Border(left: BorderSide(color: Color(0xFFEBE9E8))),
            ),
            child: Icon(
              icon,
              size: 14,
              color: onPressed == null
                  ? const Color(0xFF7A7272).withOpacity(0.5)
                  : const Color(0xFF7A7272),
            ),
          ),
        ),
      ),
    );
  }
}
