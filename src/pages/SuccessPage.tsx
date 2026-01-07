import React, { useEffect, useMemo } from "react";
import { Box, Typography, Button, Paper, Container, useTheme } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const SuccessPage: React.FC = () => {
    const { clearCart } = useCart();
    const navigate = useNavigate();
    const theme = useTheme();

    const orderNumber = useMemo(() => Math.floor(Math.random() * 90000) + 10000, []);

    useEffect(() => {
        clearCart();
    }, [clearCart]);

    const handleContinueShopping = () => {
        navigate('/');
    };

    // Criar múltiplas nuvens de pó colorido
    const colorClouds = Array.from({ length: 25 }, (_, i) => {
        const colors = [
            'rgba(255, 20, 147, 0.8)',   // Pink
            'rgba(0, 206, 209, 0.8)',    // Turquesa
            'rgba(255, 215, 0, 0.8)',    // Dourado
            'rgba(255, 99, 71, 0.8)',    // Coral
            'rgba(147, 112, 219, 0.8)',  // Roxo
            'rgba(50, 205, 50, 0.8)',    // Verde Lima
            'rgba(255, 105, 180, 0.8)',  // Rosa
            'rgba(255, 165, 0, 0.8)',    // Laranja
            'rgba(135, 206, 250, 0.8)',  // Azul céu
            'rgba(255, 228, 181, 0.8)',  // Pêssego
            'rgba(221, 160, 221, 0.8)',  // Lilás
            'rgba(255, 240, 0, 0.8)',    // Amarelo
        ];

        return {
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: 150 + Math.random() * 300,
            delay: Math.random() * 0.3,
            duration: 3 + Math.random() * 2,
            blur: 40 + Math.random() * 60
        };
    });

    return (
        <Box sx={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: theme.palette.background.default,
            overflow: 'hidden'
        }}>
            {/* Nuvens de Pó Colorido */}
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 1
            }}>
                {colorClouds.map((cloud) => (
                    <Box
                        key={cloud.id}
                        sx={{
                            position: 'absolute',
                            top: `${cloud.top}%`,
                            left: `${cloud.left}%`,
                            width: `${cloud.size}px`,
                            height: `${cloud.size}px`,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${cloud.color}, transparent 70%)`,
                            filter: `blur(${cloud.blur}px)`,
                            opacity: 0,
                            animation: `cloudExpand${cloud.id} ${cloud.duration}s ease-out infinite`,
                            animationDelay: `${cloud.delay}s`,
                            transform: 'translate(-50%, -50%)',
                            [`@keyframes cloudExpand${cloud.id}`]: {
                                '0%': {
                                    transform: 'translate(-50%, -50%) scale(0)',
                                    opacity: 0
                                },
                                '20%': {
                                    opacity: 0.9
                                },
                                '50%': {
                                    transform: `translate(-50%, -50%) scale(1.5) rotate(${Math.random() * 360}deg)`,
                                    opacity: 0.8
                                },
                                '100%': {
                                    transform: `translate(${(Math.random() - 0.5) * 200}px, ${(Math.random() - 0.5) * 200}px) scale(2.5) rotate(${Math.random() * 720}deg)`,
                                    opacity: 0
                                }
                            }
                        }}
                    />
                ))}

                {/* Camada extra de partículas pequenas */}
                {Array.from({ length: 50 }, (_, i) => {
                    const colors = [
                        '#FF1493', '#00CED1', '#FFD700', '#FF6347',
                        '#9370DB', '#32CD32', '#FF69B4', '#FFA500',
                        '#87CEFA', '#FFE4B5', '#DDA0DD', '#FFF000'
                    ];
                    return {
                        id: `particle-${i}`,
                        top: Math.random() * 100,
                        left: Math.random() * 100,
                        color: colors[Math.floor(Math.random() * colors.length)],
                        size: 20 + Math.random() * 40,
                        delay: Math.random() * 0.5,
                        duration: 2 + Math.random() * 2
                    };
                }).map((particle) => (
                    <Box
                        key={particle.id}
                        sx={{
                            position: 'absolute',
                            top: `${particle.top}%`,
                            left: `${particle.left}%`,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${particle.color}, transparent 60%)`,
                            filter: 'blur(8px)',
                            opacity: 0,
                            animation: `particleBurst ${particle.duration}s ease-out infinite`,
                            animationDelay: `${particle.delay}s`,
                            '@keyframes particleBurst': {
                                '0%': {
                                    transform: 'scale(0)',
                                    opacity: 0
                                },
                                '30%': {
                                    opacity: 1
                                },
                                '100%': {
                                    transform: `translate(${(Math.random() - 0.5) * 300}px, ${(Math.random() - 0.5) * 300}px) scale(1.5)`,
                                    opacity: 0
                                }
                            }
                        }}
                    />
                ))}
            </Box>

            <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 10 }}>
                <Paper
                    elevation={10}
                    sx={{
                        p: 5,
                        textAlign: 'center',
                        borderRadius: 4,
                        bgcolor: theme.palette.mode === 'dark'
                            ? 'rgba(30, 41, 59, 0.92)'
                            : 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(20px)',
                        boxShadow: theme.palette.mode === 'dark'
                            ? '0 20px 60px rgba(0, 0, 0, 0.6)'
                            : '0 20px 60px rgba(0, 0, 0, 0.15)',
                        border: '2px solid',
                        borderColor: theme.palette.mode === 'dark'
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(255, 255, 255, 0.5)',
                        animation: 'popIn 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                        '@keyframes popIn': {
                            '0%': {
                                transform: 'scale(0.5) rotate(-5deg)',
                                opacity: 0
                            },
                            '60%': {
                                transform: 'scale(1.05) rotate(2deg)'
                            },
                            '100%': {
                                transform: 'scale(1) rotate(0)',
                                opacity: 1
                            }
                        }
                    }}
                >
                    <Box sx={{
                        color: 'success.main',
                        mb: 2,
                        animation: 'celebrate 1.5s ease-in-out infinite',
                        '@keyframes celebrate': {
                            '0%, 100%': {
                                transform: 'scale(1) rotate(0deg)'
                            },
                            '25%': {
                                transform: 'scale(1.1) rotate(-5deg)'
                            },
                            '75%': {
                                transform: 'scale(1.1) rotate(5deg)'
                            }
                        }
                    }}>
                        <CheckCircleOutlineIcon sx={{ fontSize: 100 }} />
                    </Box>

                    <Typography variant="h4" sx={{ fontWeight: 900, mb: 2, color: 'text.primary' }}>
                        Encomenda Confirmada!
                    </Typography>

                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                        A tua Lhama já está a preparar o envio. <br />
                        Receberás um e-mail com os detalhes do rastreio em breve.
                    </Typography>

                    <Box sx={{
                        p: 2,
                        bgcolor: theme.palette.mode === 'dark'
                            ? 'rgba(0, 0, 0, 0.3)'
                            : 'rgba(0, 0, 0, 0.05)',
                        borderRadius: 2,
                        mb: 4,
                        border: '1px solid',
                        borderColor: 'divider'
                    }}>
                        <Typography variant="caption" sx={{
                            fontWeight: 700,
                            display: 'block',
                            mb: 1,
                            color: 'text.secondary'
                        }}>
                            NÚMERO DO PEDIDO
                        </Typography>
                        <Typography variant="h6" sx={{
                            letterSpacing: 2,
                            fontWeight: 800,
                            color: 'primary.main'
                        }}>
                            #LH-{orderNumber}
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        onClick={handleContinueShopping}
                        sx={{
                            py: 2,
                            fontWeight: 800,
                            borderRadius: 3,
                            textTransform: 'none',
                            fontSize: '1.1rem'
                        }}
                    >
                        Continuar a Comprar
                    </Button>
                </Paper>
            </Container>
        </Box>
    );
};

export default SuccessPage;